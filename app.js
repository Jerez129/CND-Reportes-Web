(() => {
  "use strict";

  const CONFIG = window.CONFIG;
  const form = document.getElementById("reporte");
  const $ = (nombre) => form.elements[nombre];
  const sugerenciasEl = document.getElementById("sugerencias");
  const verMasBtn = document.getElementById("verMas");
  const estadoEl = document.getElementById("estado");
  const enviarBtn = document.getElementById("enviar");
  const vistaPrevia = document.getElementById("vistaPrevia");
  const payloadEl = document.getElementById("payload");

  const modoPrueba = !CONFIG.workerUrl || new URLSearchParams(location.search).has("prueba");
  document.getElementById("modo").hidden = !modoPrueba;

  let formKey = "relatos";
  let casosActuales = [];         // casos ordenados por parecido
  let mostrados = 3;
  let casoElegido = -1;

  const cfg = () => CONFIG.formularios[formKey];

  // ---------- Utilidades ----------

  const guardar = (clave, valor) => { try { localStorage.setItem(clave, valor); } catch { /* sin almacenamiento */ } };
  const leer = (clave) => { try { return localStorage.getItem(clave); } catch { return null; } };
  const normal = (s) => s.trim().toLowerCase();

  // Las opciones guardan el texto EXACTO del Forms como valor y se muestran sin espacios extra
  function llenarSelect(select, opciones, seleccionado) {
    select.innerHTML = "";
    for (const op of opciones) {
      const o = document.createElement("option");
      o.value = op;
      o.textContent = op.trim();
      select.appendChild(o);
    }
    if (seleccionado != null && opciones.includes(seleccionado)) select.value = seleccionado;
  }

  const STOP = new Set(("porque para como esta este estos estas desde donde cuando entre sobre sino tambien " +
    "habia hubo tenia fueron fue estaba estaban otro otra otros otras cual cuales tiene tienen hace hacer " +
    "pero solo todo todos toda todas mismo misma muy mas menos nada sido ser son sus una unos unas del los las").split(" "));

  function palabras(texto) {
    return texto.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
      .split(/[^a-z0-9ñ]+/).filter((p) => p.length > 3 && !STOP.has(p))
      .map((p) => p.replace(/(es|s)$/, "")); // plural sencillo
  }

  // Lista de indicadores: primero los más usados en Bávaro, luego el resto en orden alfabético
  function llenarIndicadores(select, opciones, masUsados) {
    select.innerHTML = "";
    const primeros = (masUsados || []).filter((op) => opciones.includes(op));
    const resto = opciones.filter((op) => !primeros.includes(op))
      .sort((a, b) => a.trim().localeCompare(b.trim(), "es"));
    const grupo = (titulo, lista) => {
      if (!lista.length) return;
      const g = document.createElement("optgroup");
      g.label = titulo;
      for (const op of lista) {
        const o = document.createElement("option");
        o.value = op;
        o.textContent = op.trim();
        g.appendChild(o);
      }
      select.appendChild(g);
    };
    grupo("Más usados en Bávaro", primeros);
    grupo(primeros.length ? "Otros" : "Indicadores", resto);
  }

  // ---------- Opciones de cada formulario ----------

  // Relatos: cada área tiene su pregunta de indicador ("Control" usa la de Almacén)
  function indicadoresDeArea(area) {
    const c = cfg();
    if (c.indicadores) return c.indicadores; // 5XQ: una sola lista
    let entrada = c.indicadoresPorArea[area];
    if (entrada && entrada.igualQue) entrada = c.indicadoresPorArea[entrada.igualQue];
    return entrada || { pregunta: "", opciones: [] };
  }

  // ---------- Casos (data/casos.js) ----------

  // Clave con los nombres exactos del Forms: "Relatos|Área|Indicador" o "5XQ|Indicador".
  // "Control" usa la lista de Almacén; algunos de 5XQ comparten lista con Relatos (DATOS.igual).
  function temaDe(area, indicador) {
    const ind = indicador.trim();
    const clave = formKey === "relatos" ? `Relatos|${area === "Control" ? "Almacén" : area}|${ind}` : `5XQ|${ind}`;
    const igual = (window.DATOS && window.DATOS.igual) || {};
    return igual[clave] || clave;
  }

  function casosPara(area, indicador) {
    const biblioteca = window.DATOS && window.DATOS.casos;
    if (!biblioteca) throw new Error("No se encontraron los casos (data/casos-*.js).");
    const tema = temaDe(area, indicador);
    return (biblioteca[tema] || []).map((f, i) => ({
      id: `${tema}#${i}`,
      porques: f.slice(0, 5),
      causaRaiz: f[5],
      accionCorrectiva: f[6]
    }));
  }

  // ---------- Casos ya enviados (en este navegador) ----------

  const usados = new Set(JSON.parse(leer("casosUsados") || "[]"));
  const enviados = JSON.parse(leer("analisisEnviados") || "[]");

  const huella = (porques, causa) => normal(porques.join(" ") + " " + causa).replace(/[^a-z0-9ñ]+/g, "");

  function recordarEnvio(caso, porques, causa) {
    if (caso) usados.add(caso.id);
    enviados.push(huella(porques, causa));
    guardar("casosUsados", JSON.stringify([...usados]));
    guardar("analisisEnviados", JSON.stringify(enviados.slice(-300)));
  }

  // ---------- Nada demasiado específico ----------

  // Solo se permiten nombres de productos. Se bloquean códigos, fichas, números de
  // clientes o rutas, nombres de negocios y de personas dentro del análisis.
  const PATRONES_ESPECIFICOS = [
    [/\b\d{3,}\b(?!\s?(ml|cc|oz)\b)/i, "un número largo"],
    [/\b[a-z]{1,4}-?\d{2,}\b/i, "un código"],
    [/\b(ficha|placa|chasis|c[oó]digo|sku|c[eé]dula|tel[eé]fono|rnc)\b/i, "un identificador"],
    [/\b(ruta|cami[oó]n|unidad|cliente|factura|pedido|orden)\s*(#|no\.?|n[uú]m\.?|n[uú]mero)?\s*\d+/i, "un número de ruta, camión, cliente o factura"],
    [/\b(colmado|supermercado|super|minimarket|bodega|cafeter[ií]a|farmacia|licorer[ií]a|bar|restaurante|hotel|car ?wash|discoteca|drink)\s+[A-ZÁÉÍÓÚÑ]/, "el nombre de un negocio"],
    [/\b(sr|sra|don|doña|señor|señora|chofer|ayudante|conferente|operador|supervisor)\.?\s+[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+/, "el nombre de una persona"]
  ];

  function textoEspecifico(texto) {
    for (const [patron, motivo] of PATRONES_ESPECIFICOS) {
      const m = texto.match(patron);
      if (m) return { motivo, fragmento: m[0] };
    }
    return null;
  }

  // Ordena los casos según cuántas palabras comparten con la descripción.
  // Las palabras raras (que salen en pocos casos) pesan más.
  function ordenarPorParecido(casos, descripcion) {
    const consulta = new Set(palabras(descripcion));
    if (consulta.size === 0) return casos.slice();

    const bolsas = casos.map((c) => new Set(palabras(c.porques.join(" ") + " " + c.causaRaiz)));
    const df = {};
    for (const b of bolsas) for (const p of b) df[p] = (df[p] || 0) + 1;

    return casos
      .map((c, i) => {
        let puntaje = 0;
        for (const p of consulta) if (bolsas[i].has(p)) puntaje += Math.log(1 + casos.length / df[p]);
        return { c, i, puntaje };
      })
      .sort((a, b) => b.puntaje - a.puntaje || a.i - b.i)
      .map((x) => x.c);
  }

  // ---------- Pantalla ----------

  function aplicarFormulario() {
    const c = cfg();
    document.querySelectorAll(".tabs button").forEach((b) =>
      b.setAttribute("aria-selected", String(b.dataset.form === formKey)));
    form.querySelectorAll("[data-campo]").forEach((el) => {
      el.hidden = !c.campos.includes(el.dataset.campo);
    });
    document.getElementById("descEtiqueta").textContent = c.etiquetas.descripcion;

    if (formKey === "relatos") {
      const cont = document.getElementById("cronicaOpciones");
      cont.innerHTML = "";
      for (const op of c.cronicaOpciones) {
        const l = document.createElement("label");
        l.className = "radio";
        const r = document.createElement("input");
        r.type = "radio";
        r.name = "cronica";
        r.value = op;
        l.append(r, " " + (op.trim() === "Si" ? "Sí" : op.trim()));
        cont.appendChild(l);
      }
      llenarSelect($("responsable"), c.responsable.opciones, leer("responsable"));
    } else {
      const lista = document.getElementById("supervisores");
      lista.innerHTML = "";
      for (const s of c.supervisoresSugeridos) {
        const o = document.createElement("option");
        o.value = s;
        lista.appendChild(o);
      }
      $("supervisor").value = leer("supervisor") || c.supervisoresSugeridos[0];
    }

    llenarSelect($("area"), c.areas, leer(`area-${formKey}`));
    aplicarArea();
  }

  function aplicarArea() {
    const c = cfg();
    const area = $("area").value;
    const lista = indicadoresDeArea(area);
    const opciones = Array.isArray(lista) ? lista : lista.opciones;
    const masUsados = Array.isArray(c.masUsados) ? c.masUsados : c.masUsados[area];
    llenarIndicadores($("indicador"), opciones, masUsados);
    aplicarIndicador();
  }

  function aplicarIndicador() {
    borrarAnalisis();
    actualizarSugerencias();
  }

  function actualizarSugerencias() {
    let casos;
    try {
      casos = casosPara($("area").value, $("indicador").value);
    } catch (e) {
      sugerenciasEl.textContent = e.message;
      verMasBtn.hidden = true;
      return;
    }
    // Los casos que ya usaste van al final, para no repetirlos
    const ordenados = ordenarPorParecido(casos, $("descripcion").value);
    casosActuales = [...ordenados.filter((c) => !usados.has(c.id)), ...ordenados.filter((c) => usados.has(c.id))];
    mostrados = 3;
    casoElegido = -1;
    pintarSugerencias();
  }

  function pintarSugerencias() {
    sugerenciasEl.innerHTML = "";
    if (casosActuales.length === 0) {
      sugerenciasEl.innerHTML = '<p class="vacio">No hay casos guardados para este indicador. Escribe el análisis abajo.</p>';
      verMasBtn.hidden = true;
      return;
    }
    casosActuales.slice(0, mostrados).forEach((caso, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "caso";
      b.setAttribute("aria-pressed", String(i === casoElegido));
      const t = document.createElement("strong");
      t.textContent = caso.porques[0].replace(/^¿[^?]*\?\s*→\s*/, "");
      const s = document.createElement("span");
      s.textContent = "Causa raíz: " + caso.causaRaiz;
      if (usados.has(caso.id)) {
        const etiqueta = document.createElement("em");
        etiqueta.className = "tag";
        etiqueta.textContent = "Ya lo usaste";
        b.append(etiqueta);
      }
      b.append(t, s);
      b.addEventListener("click", () => elegirCaso(i));
      sugerenciasEl.appendChild(b);
    });
    const restantes = casosActuales.length - mostrados;
    verMasBtn.hidden = restantes <= 0;
    verMasBtn.textContent = `Ver más casos (${Math.max(restantes, 0)})`;
  }

  function elegirCaso(i) {
    const caso = casosActuales[i];
    casoElegido = i;
    [0, 1, 2, 3, 4].forEach((n) => { $(`porque${n}`).value = caso.porques[n] || ""; });
    $("causaRaiz").value = caso.causaRaiz;
    $("accionCorrectiva").value = caso.accionCorrectiva;
    pintarSugerencias();
    $("porque0").focus();
  }

  // ---------- Envío ----------

  function validar() {
    let ok = true;
    const obligatorios = cfg().obligatorios;
    form.querySelectorAll(".invalido").forEach((el) => el.classList.remove("invalido"));
    for (const nombre of obligatorios) {
      if (nombre === "cronica") {
        if (!form.querySelector('input[name="cronica"]:checked')) {
          form.querySelector(".cronica").classList.add("invalido");
          ok = false;
        }
        continue;
      }
      const el = $(nombre);
      if (!el.value.trim()) { el.classList.add("invalido"); ok = false; }
    }
    if (!ok) { mostrarEstado("Completa los campos marcados en rojo.", "error"); return false; }

    // Nada específico en el análisis (los campos Ruta y Chofer sí los pide el Forms)
    const revisar = ["descripcion", "resultadoRuta", "pregunta", "porque0", "porque1", "porque2",
      "porque3", "porque4", "causaRaiz", "accionCorrectiva"];
    for (const nombre of revisar) {
      const el = $(nombre);
      if (el.closest("[hidden]")) continue;
      const hallazgo = textoEspecifico(el.value);
      if (hallazgo) {
        el.classList.add("invalido");
        el.focus();
        mostrarEstado(`Hay ${hallazgo.motivo} («${hallazgo.fragmento}»). Escríbelo de forma general; solo se permiten nombres de productos.`, "error");
        return false;
      }
    }

    // No repetir un análisis que ya se envió
    const porques = [0, 1, 2, 3, 4].map((n) => $(`porque${n}`).value.trim());
    if (enviados.includes(huella(porques, $("causaRaiz").value.trim()))) {
      $("porque0").classList.add("invalido");
      mostrarEstado("Este análisis es igual a uno que ya enviaste. Ajústalo a lo que pasó esta vez.", "error");
      return false;
    }
    return true;
  }

  function construirRespuestas() {
    const c = cfg();
    const q = c.preguntas;
    const v = (n) => ($(n).value || "").trim();
    const area = $("area").value;
    const centro = CONFIG.centro;
    const respuestas = [];
    // Las respuestas opcionales vacías no se envían
    const agregar = (questionId, answer1) => { if (answer1) respuestas.push({ questionId, answer1 }); };

    if (formKey === "relatos") {
      agregar(q.fecha, v("fecha"));
      agregar(q.centro, centro.relatos);
      agregar(c.responsable.pregunta, $("responsable").value);
      agregar(q.area, area);
      agregar(indicadoresDeArea(area).pregunta, $("indicador").value);
      agregar(q.resultado, v("descripcion"));
      agregar(q.resultadoRuta, v("resultadoRuta"));
      agregar(q.ruta, v("ruta"));
      q.porques.forEach((id, n) => agregar(id, v(`porque${n}`)));
      agregar(q.causaRaiz, v("causaRaiz"));
      agregar(q.cronica, form.querySelector('input[name="cronica"]:checked').value);
      agregar(q.accionCorrectiva, v("accionCorrectiva"));
    } else {
      agregar(q.centro, centro.x5q);
      agregar(q.fecha, v("fecha"));
      agregar(q.area, area);
      agregar(q.chofer, v("chofer"));
      agregar(q.areaConfirmacion, area);
      agregar(q.ruta, v("ruta"));
      agregar(q.supervisor, v("supervisor"));
      agregar(q.indicador, $("indicador").value);
      q.porques.forEach((id, n) => agregar(id, v(`porque${n}`)));
      agregar(q.causaRaiz, v("causaRaiz"));
      agregar(q.accionCorrectiva, v("accionCorrectiva"));
      agregar(q.pregunta, v("pregunta"));
    }
    return respuestas;
  }

  function mostrarEstado(texto, tipo) {
    estadoEl.textContent = texto;
    estadoEl.className = "estado " + (tipo || "");
  }

  // Borra el análisis para que no se envíe uno que era de otro indicador
  function borrarAnalisis() {
    ["causaRaiz", "accionCorrectiva", "porque0", "porque1", "porque2", "porque3", "porque4"]
      .forEach((n) => { $(n).value = ""; });
    form.querySelectorAll('input[name="cronica"]').forEach((r) => { r.checked = false; });
  }

  function limpiarAnalisis() {
    ["descripcion", "resultadoRuta", "ruta", "chofer", "pregunta"].forEach((n) => { $(n).value = ""; });
    borrarAnalisis();
    actualizarSugerencias();
  }

  let enviando = false;
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (enviando) return; // evita doble envío
    if (!validar()) return;

    const cuerpo = { formulario: formKey, answers: construirRespuestas() };

    if (modoPrueba) {
      payloadEl.textContent = JSON.stringify(cuerpo, null, 2);
      vistaPrevia.hidden = false;
      mostrarEstado("Modo prueba: revisa abajo lo que se enviaría. No se envió nada.", "ok");
      return;
    }

    enviando = true;
    enviarBtn.disabled = true;
    mostrarEstado("Enviando…");
    try {
      const resp = await fetch(CONFIG.workerUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cuerpo)
      });
      const texto = await resp.text();
      if (!resp.ok) throw new Error(`${resp.status} ${texto}`.trim());
      mostrarEstado(`✅ ${cfg().nombre} enviado. Puedes llenar el siguiente.`, "ok");
      recordarEnvio(casosActuales[casoElegido],
        [0, 1, 2, 3, 4].map((n) => $(`porque${n}`).value.trim()), $("causaRaiz").value.trim());
      limpiarAnalisis();
    } catch (err) {
      mostrarEstado("❌ No se pudo enviar: " + err.message, "error");
    } finally {
      enviando = false;
      enviarBtn.disabled = false;
    }
  });

  // ---------- Eventos ----------

  document.querySelectorAll(".tabs button").forEach((b) => b.addEventListener("click", () => {
    if (b.dataset.form === formKey) return;
    formKey = b.dataset.form;
    vistaPrevia.hidden = true;
    mostrarEstado("");
    aplicarFormulario();
  }));

  $("responsable").addEventListener("change", () => guardar("responsable", $("responsable").value));
  $("supervisor").addEventListener("change", () => guardar("supervisor", $("supervisor").value.trim()));
  $("area").addEventListener("change", () => { guardar(`area-${formKey}`, $("area").value); aplicarArea(); });
  $("indicador").addEventListener("change", aplicarIndicador);

  let espera;
  $("descripcion").addEventListener("input", () => {
    clearTimeout(espera);
    espera = setTimeout(actualizarSugerencias, 250);
  });
  verMasBtn.addEventListener("click", () => { mostrados += 5; pintarSugerencias(); });
  form.addEventListener("input", (e) => {
    if (e.target.classList) e.target.classList.remove("invalido");
    if (e.target.name === "cronica") form.querySelector(".cronica").classList.remove("invalido");
  });

  $("fecha").value = new Date().toLocaleDateString("en-CA"); // yyyy-mm-dd en hora local
  aplicarFormulario();
})();
