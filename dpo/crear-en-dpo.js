// Marcador "Crear en DPO": crea en DPO Evolution el plan de acción que copió la página
// de Reportes CND. Se ejecuta dentro de dpo.arvolution.com, con la sesión de quien lo usa,
// y hace las mismas llamadas GraphQL que el formulario de DPO.
// Siempre muestra una vista previa; nada se crea sin dar clic en "Crear acción".
(() => {
  "use strict";

  if (location.hostname !== "dpo.arvolution.com") {
    alert("Abre DPO Evolution (dpo.arvolution.com) y usa el marcador ahí.");
    return;
  }
  if (document.getElementById("cnd-dpo")) return; // ya está abierto

  const Q = {
    kpis: "query KPIsList($isGlobal: Boolean) { getAllKPI(isGlobal: $isGlobal) { id slug enTitle esTitle } }",
    herramientas: "query getAllManagementTool { getAllManagementTool { id slug enTitle esTitle } }",
    reuniones: "query GetRoutineAvailableInfo($forFilter: Boolean) { getRoutinesAvailable(forFilter: $forFilter) { name slug } }",
    usuarios: "query SearchedUsersWithAccessToLocation($searchString: String!, $locationSlug: String!) { searchUsersWithAccessToLocation(searchString: $searchString, locationSlug: $locationSlug) { name slug id } }",
    crear: "mutation CreateEditActionLog($payload: CreateEditActionLogPayload!) { createEditActionLog(payload: $payload) { isSuccess } }"
  };

  const PILARES = [["DISTRIBUTION", "Distribución"], ["WAREHOUSE", "Almacén"], ["FLEET", "Flota"],
    ["SAFETY", "Seguridad"], ["PLANNING", "Planeación"], ["PEOPLE", "Gente"], ["MANAGEMENT", "Gestión"]];

  async function gql(operationName, query, variables) {
    const resp = await fetch("/graphql", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ operationName, query, variables: variables || {} })
    });
    let json;
    try { json = await resp.json(); } catch { throw new Error(`DPO respondió ${resp.status}`); }
    if (json.errors && json.errors.length) throw new Error(json.errors.map((e) => e.message).join("; "));
    return json.data;
  }

  // ---------- Ventana (en shadow DOM para no mezclarse con los estilos de DPO) ----------

  const host = document.createElement("div");
  host.id = "cnd-dpo";
  const raiz = host.attachShadow({ mode: "open" });
  raiz.innerHTML = `
    <style>
      * { box-sizing: border-box; }
      .fondo { position: fixed; inset: 0; z-index: 2147483647; background: rgba(0,0,0,.45);
        display: flex; align-items: flex-start; justify-content: center; overflow-y: auto; padding: 24px 12px;
        font: 14px/1.45 system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #1d2330; }
      .caja { background: #fff; width: min(620px, 100%); border-radius: 12px; padding: 18px 20px;
        box-shadow: 0 10px 40px rgba(0,0,0,.3); }
      h2 { margin: 0 0 4px; font-size: 1.1rem; color: #b3121f; }
      .sub { margin: 0 0 14px; color: #5d6677; font-size: .85rem; }
      label { display: block; margin: 10px 0 0; font-weight: 600; font-size: .85rem; }
      input, select, textarea { display: block; width: 100%; margin-top: 4px; padding: 7px 9px; font: inherit;
        font-weight: 400; border: 1px solid #d8dce3; border-radius: 6px; background: #fff; color: inherit; }
      textarea { resize: vertical; }
      .fila { display: grid; grid-template-columns: 1fr 1fr; gap: 0 12px; }
      @media (max-width: 520px) { .fila { grid-template-columns: 1fr; } }
      .falta { border-color: #b3261e; background: #fdecee; }
      .chips { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 6px; }
      .chip { display: inline-flex; align-items: center; gap: 6px; padding: 3px 4px 3px 10px; border-radius: 999px;
        background: #f4f5f7; border: 1px solid #d8dce3; font-size: .85rem; font-weight: 400; }
      .chip button { border: 0; background: none; cursor: pointer; font-size: 1rem; line-height: 1; padding: 0 4px; color: #5d6677; }
      .resultados { margin-top: 4px; border: 1px solid #d8dce3; border-radius: 6px; max-height: 160px; overflow-y: auto; }
      .resultados:empty { display: none; }
      .resultados button { display: block; width: 100%; text-align: left; padding: 6px 9px; border: 0; background: #fff;
        font: inherit; cursor: pointer; }
      .resultados button:hover, .resultados button:focus { background: #fdecee; }
      .botones { display: flex; justify-content: flex-end; gap: 8px; margin-top: 18px; }
      .botones button { padding: 9px 18px; border-radius: 8px; font: inherit; font-weight: 600; cursor: pointer; }
      .primario { border: 0; background: #b3121f; color: #fff; }
      .primario:disabled { opacity: .55; cursor: wait; }
      .secundario { border: 1px solid #d8dce3; background: #fff; color: inherit; }
      .estado { margin: 12px 0 0; font-size: .9rem; }
      .ok { color: #1d7a3e; } .error { color: #b3261e; }
      [hidden] { display: none !important; }
    </style>
    <div class="fondo">
      <div class="caja" role="dialog" aria-modal="true" aria-labelledby="titulo">
        <h2 id="titulo">Crear plan de acción en DPO</h2>
        <p class="sub" id="origen">Leyendo el plan copiado…</p>

        <div id="pegar" hidden>
          <label>Pega aquí el plan que copiaste en Reportes CND (Ctrl+V)
            <textarea id="pegado" rows="4"></textarea></label>
          <div class="botones"><button type="button" class="secundario" data-cerrar>Cancelar</button>
            <button type="button" class="primario" id="usarPegado">Continuar</button></div>
        </div>

        <form id="form" hidden>
          <label>Acción (descripción)<textarea id="description" rows="2"></textarea></label>
          <label>Nota<textarea id="note" rows="3"></textarea></label>
          <div class="fila">
            <label>KPI<select id="KPIs"></select></label>
            <label>Pilar<select id="pillar"></select></label>
            <label>Herramienta de gestión<select id="managementTool"></select></label>
            <label>Reunión<select id="meeting"></select></label>
            <label>Fecha límite<input type="date" id="endDate"></label>
          </div>
          <label>Dueño<input type="text" id="buscarOwner" placeholder="Buscar por nombre…" autocomplete="off"></label>
          <div class="chips" id="owner"></div>
          <div class="resultados" id="resOwner"></div>
          <label>Responsables<input type="text" id="buscarResp" placeholder="Agregar por nombre…" autocomplete="off"></label>
          <div class="chips" id="responsibles"></div>
          <div class="resultados" id="resResp"></div>
          <p class="estado" id="estado" role="status"></p>
          <div class="botones"><button type="button" class="secundario" data-cerrar>Cancelar</button>
            <button type="submit" class="primario" id="crear">Crear acción</button></div>
        </form>
      </div>
    </div>`;
  document.body.appendChild(host);

  const $ = (id) => raiz.getElementById(id);
  const cerrar = () => host.remove();
  raiz.querySelectorAll("[data-cerrar]").forEach((b) => b.addEventListener("click", cerrar));
  raiz.addEventListener("keydown", (e) => {
    if (e.key === "Escape") cerrar();
    // Enter en un campo de texto no debe crear la acción (solo el botón)
    if (e.key === "Enter" && e.target.tagName === "INPUT") e.preventDefault();
  });

  function estado(texto, tipo) {
    const el = $("estado");
    el.textContent = texto;
    el.className = "estado " + (tipo || "");
  }

  function llenar(select, opciones, valor, vacio) {
    select.innerHTML = "";
    if (vacio) select.append(new Option(vacio, ""));
    for (const [v, t] of opciones) select.append(new Option(t, v));
    select.value = opciones.some(([v]) => v === valor) ? valor : "";
  }

  // ---------- Leer el plan ----------

  function interpretar(texto) {
    try {
      const p = JSON.parse((texto || "").trim());
      return p && p.tipo === "cnd-plan-dpo" ? p : null;
    } catch { return null; }
  }

  // Si el navegador tarda en dar permiso, se ofrece pegar a mano mientras tanto
  async function leerPortapapeles() {
    const espera = new Promise((ok) => setTimeout(() => ok(null), 2500));
    const lectura = navigator.clipboard.readText().then(interpretar, () => null);
    return Promise.race([lectura, espera]);
  }

  // ---------- Personas ----------

  let plan = null;           // lo que copió la página de Reportes CND
  let owner = null;          // { slug, name }
  let responsables = [];     // [{ slug, name }]

  function pintarPersonas() {
    const chip = (p, quitar) => {
      const c = document.createElement("span");
      c.className = "chip";
      c.textContent = p.name;
      const x = document.createElement("button");
      x.type = "button";
      x.textContent = "×";
      x.setAttribute("aria-label", "Quitar " + p.name);
      x.addEventListener("click", quitar);
      c.append(x);
      return c;
    };
    $("owner").replaceChildren(...(owner ? [chip(owner, () => { owner = null; pintarPersonas(); })] : []));
    $("responsibles").replaceChildren(...responsables.map((p) =>
      chip(p, () => { responsables = responsables.filter((r) => r.slug !== p.slug); pintarPersonas(); })));
    $("buscarOwner").classList.toggle("falta", !owner);
  }

  async function buscarUsuarios(texto) {
    const d = await gql("SearchedUsersWithAccessToLocation", Q.usuarios, { searchString: texto, locationSlug: plan.location });
    return (d.searchUsersWithAccessToLocation || []).map((u) => ({ slug: u.slug, name: u.name }));
  }

  function buscador(input, lista, elegir) {
    let espera;
    input.addEventListener("input", () => {
      clearTimeout(espera);
      const texto = input.value.trim();
      if (texto.length < 3) { lista.replaceChildren(); return; }
      espera = setTimeout(async () => {
        try {
          const usuarios = await buscarUsuarios(texto);
          lista.replaceChildren(...usuarios.slice(0, 15).map((u) => {
            const b = document.createElement("button");
            b.type = "button";
            b.textContent = u.name;
            b.addEventListener("click", () => { elegir(u); input.value = ""; lista.replaceChildren(); pintarPersonas(); });
            return b;
          }));
          if (!usuarios.length) lista.textContent = "Sin resultados en este centro.";
        } catch (e) { lista.textContent = "No se pudo buscar: " + e.message; }
      }, 300);
    });
  }

  buscador($("buscarOwner"), $("resOwner"), (u) => {
    owner = u;
    if (!responsables.some((r) => r.slug === u.slug)) responsables.push(u);
  });
  buscador($("buscarResp"), $("resResp"), (u) => {
    if (!responsables.some((r) => r.slug === u.slug)) responsables.push(u);
  });

  // Dueño sugerido: por su código de DPO, o buscando su nombre si hay un solo resultado
  async function sugerirDueno() {
    // Código y nombre de DPO ya conocidos (config.js → dpo.personas): no hace falta buscar
    if (plan.owner && plan.ownerDpo) {
      owner = { slug: plan.owner, name: plan.ownerDpo };
      responsables = [owner];
      pintarPersonas();
      return;
    }
    if (!plan.ownerNombre) return;
    try {
      // DPO busca el texto tal cual ("Kervin Mercedes" no encuentra "Kervin Miguel Mercedes"),
      // así que si no hay resultados se prueba solo con el primer nombre
      let busqueda = plan.ownerNombre;
      let usuarios = await buscarUsuarios(busqueda);
      if (!usuarios.length && busqueda.includes(" ")) {
        busqueda = busqueda.split(" ")[0];
        usuarios = await buscarUsuarios(busqueda);
      }
      const u = usuarios.find((x) => x.slug === plan.owner) || (!plan.owner && usuarios.length === 1 ? usuarios[0] : null);
      if (u) { owner = u; responsables = [u]; }
      else {
        $("buscarOwner").value = busqueda;
        $("buscarOwner").dispatchEvent(new Event("input"));
      }
    } catch { /* se elige a mano */ }
    pintarPersonas();
  }

  // ---------- Formulario ----------

  async function mostrarFormulario(p) {
    plan = p;
    $("pegar").hidden = true;
    $("origen").textContent = `${p.reporte} del ${p.fecha} · ${p.area} · ${p.indicador}. Revisa todo antes de crear.`;
    $("form").hidden = false;
    $("description").value = p.description || "";
    $("note").value = p.note || "";
    llenar($("pillar"), PILARES, p.pillar, "Elige el pilar…");
    const fin = new Date();
    fin.setDate(fin.getDate() + (Number(p.plazoDias) || 14));
    $("endDate").value = fin.toLocaleDateString("en-CA");
    pintarPersonas();
    estado("Cargando listas de DPO…");

    try {
      const [k, h, r] = await Promise.all([
        gql("KPIsList", Q.kpis, { isGlobal: false }),
        gql("getAllManagementTool", Q.herramientas),
        gql("GetRoutineAvailableInfo", Q.reuniones, { forFilter: false })
      ]);
      llenar($("KPIs"), (k.getAllKPI || []).map((x) => [x.slug, x.esTitle || x.slug])
        .sort((a, b) => a[1].localeCompare(b[1], "es")), p.KPIs, "Elige el KPI…");
      llenar($("managementTool"), (h.getAllManagementTool || []).map((x) => [String(x.id), x.esTitle || x.slug]),
        String(p.managementTool || ""), "Sin herramienta");
      llenar($("meeting"), (r.getRoutinesAvailable || []).map((x) => [x.slug, x.name]), p.meeting, "Elige la reunión…");
      estado("");
    } catch (e) {
      estado("No se pudieron cargar las listas de DPO: " + e.message + ". ¿Tienes la sesión abierta?", "error");
      $("crear").disabled = true;
      return;
    }
    sugerirDueno();
  }

  $("usarPegado").addEventListener("click", () => {
    const p = interpretar($("pegado").value);
    if (p) mostrarFormulario(p);
    else $("pegado").classList.add("falta");
  });

  let creando = false;
  $("form").addEventListener("submit", async (e) => {
    e.preventDefault();
    if (creando) return; // evita crear dos veces

    const faltan = [];
    const revisar = (id, ok) => { $(id).classList.toggle("falta", !ok); if (!ok) faltan.push(id); };
    revisar("description", $("description").value.trim());
    revisar("KPIs", $("KPIs").value);
    revisar("pillar", $("pillar").value);
    revisar("meeting", $("meeting").value);
    revisar("endDate", $("endDate").value);
    revisar("buscarOwner", owner);
    if (faltan.length) { estado("Completa los campos marcados en rojo.", "error"); return; }

    const ahora = new Date();
    const [a, m, d] = $("endDate").value.split("-").map(Number);
    const fin = new Date(a, m - 1, d, ahora.getHours(), ahora.getMinutes()); // igual que el formulario de DPO
    if (!responsables.some((r) => r.slug === owner.slug)) responsables.unshift(owner);

    const payload = {
      KPIs: $("KPIs").value,
      description: $("description").value.trim(),
      endDate: fin.toISOString(),
      images: [],
      location: plan.location,
      managementTool: $("managementTool").value || null,
      meeting: $("meeting").value,
      note: $("note").value.trim(),
      origin: "ACTION_LOG",
      owner: owner.slug,
      pillar: $("pillar").value,
      responsibles: responsables.map((r) => r.slug),
      routinesAvailableSlug: $("meeting").value,
      startDate: ahora.toISOString(),
      status: "OPEN"
    };

    creando = true;
    $("crear").disabled = true;
    estado("Creando la acción…");
    try {
      const data = await gql("CreateEditActionLog", Q.crear, { payload });
      if (!data || !data.createEditActionLog || !data.createEditActionLog.isSuccess) throw new Error("DPO no confirmó la creación");
      estado("✅ Acción creada en DPO. Recarga el tablero para verla.", "ok");
      $("crear").hidden = true;
      raiz.querySelectorAll("[data-cerrar]").forEach((b) => { b.textContent = "Cerrar"; });
    } catch (err) {
      estado("❌ No se creó: " + err.message, "error");
      creando = false;
      $("crear").disabled = false;
    }
  });

  // ---------- Inicio ----------

  leerPortapapeles().then((p) => {
    if (plan) return; // ya se pegó a mano
    if (p) { mostrarFormulario(p); return; }
    $("origen").textContent = "No encontré el plan en el portapapeles.";
    $("pegar").hidden = false;
    $("pegado").focus();
  });
})();
