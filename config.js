// Configuración de la página. Todo lo que cambia con frecuencia está aquí,
// para no tener que tocar app.js.
//
// IMPORTANTE: los textos de las opciones se copiaron EXACTOS de los Forms
// (incluidos los espacios al final, como "TMA " o "Si "). Microsoft Forms
// compara el texto tal cual, así que no los "limpies".
// Revisado contra los formularios el 21/10/2026.
window.CONFIG = {
  // URL del Cloudflare Worker que reenvía los reportes a Microsoft Forms.
  // Vacío = modo prueba: la página muestra lo que enviaría, pero no envía nada.
  workerUrl: "https://cnd-reportes.japf20092004.workers.dev/",

  // La herramienta es solo para el centro de Bávaro.
  // relatos / x5q: el texto exacto del centro en cada Forms.
  centro: { nombre: "Bávaro", relatos: "DC Bávaro CND", x5q: "DC Bávaro CND" },

  formularios: {
    relatos: {
      nombre: "Relatos de Anomalía",
      campos: ["fecha", "responsable", "area", "indicador", "descripcion", "resultadoRuta", "ruta", "cronica"],
      // Igual que en el Forms: los porqués 4 y 5, Resultado, Resultado Ruta y Ruta son opcionales
      obligatorios: ["fecha", "responsable", "area", "indicador",
        "porque0", "porque1", "porque2", "causaRaiz", "cronica", "accionCorrectiva"],
      etiquetas: { descripcion: "Resultado: describe en una línea lo que ocurrió" },

      // Pregunta "Responsable -DOA8" (la de Bávaro). Ordenados por uso en Bávaro (abr–oct 2026).
      responsable: {
        pregunta: "rd2db96e762814601aee3ed27644fb00c",
        opciones: ["Luis Eduardo", "Freyky Reyes", "Kervin Mercedes", "Gregori Agramonte", "Carlos de la Cruz", "Jorge Reyes"]
      },

      // Indicadores más usados en Bávaro (abr–oct 2026); salen primero en la lista
      masUsados: {
        "Distribución": ["Roturas ", "Critica", "Devolución Hectolitros", "TML", "Tiempo interno ", "No Cargado"],
        "Almacén": ["Critica", "Exactitud de Inventario", "Roturas ", "No Cargado"],
        "Control": ["Critica", "Exactitud de Inventario", "Roturas ", "No Cargado"],
        "ADF": ["Rescate", "Neumático"]
      },

      areas: ["Almacén", "Distribución", "Control", "ADF"],

      // Cada área tiene su propia pregunta de indicador.
      // En el Forms, "Control" lleva a la misma pregunta que Almacén.
      indicadoresPorArea: {
        "Distribución": {
          pregunta: "r2d32b092e9974fc1b7e4feee433da935",
          opciones: ["Devolución Hectolitros", "Devolución facturas ", "TML", "Tiempo en ruta ", "Tiempo interno ",
            "% Rutas SIF", "Reporte de Acis", "Cierre de Acis", "Exceso de Jornada", "Roturas ",
            "Devolución Salvadas", "Dispersion KM", "No Cargado", "Critica", "Ocupación",
            "Modulacion de la devolucion", "Huecos"]
        },
        "Almacén": {
          pregunta: "rfafe6211a0824431b4da738356088379",
          opciones: ["TMA ", "Productividad picking", "Pallet x Hr ", "Roturas ", "Reempaque",
            "Carga de camiones", "No Cargado", "Critica", "Horas Extras", "Exactitud de Inventario"]
        },
        "Control": { igualQue: "Almacén" },
        "ADF": {
          pregunta: "rcd942dc982934d5a95640a468d434a4d",
          opciones: ["Rescate", "Neumático", "Mantenimiento Correctivo", "Mantenimiento Preventivo",
            "Tiempo de Reparacion", "Pre-Uso Camion T2", "Post-Uso Camion T2", "Pre-Uso Montacargas",
            "Pots-Uso Montacargas"]
        }
      },

      cronicaOpciones: ["Si ", "No"],

      preguntas: {
        fecha: "r9f5ed54177e0402f88adce29f40b1e86",
        centro: "r0f2e316bd77b488db2b52dfd7b228cd5",
        area: "re4046ad6600e42048ee617e3f099421a",
        resultado: "ra4543dd556a24936a9c1b528e2d3c83c",
        resultadoRuta: "ref99433258634013a5132798188e60da",
        ruta: "r66a60b50e7be481e88f3625dcab7db5c",
        porques: ["r90023a9f201546929f1afb9fd1b97294", "rb80d584e0ec743d5a11c41a65dfb10fb",
          "r04008fdf96af46b8ad91ee089daac537", "r2249ac1eaca64dd78ca84e6c2f6d620d",
          "r7d5e1f75fe5542ddae48a2cb66302b61"],
        causaRaiz: "r29313676109f4a8f93b0a14c5a5ad1cd",
        cronica: "r6b649e95b1b04bada68b90fa00a57ce6",
        accionCorrectiva: "r1b940d8b394c4c09aebb846a009c3ad0"
      }
    },

    x5q: {
      nombre: "5XQ",
      campos: ["fecha", "area", "chofer", "ruta", "supervisor", "indicador", "descripcion", "pregunta"],
      // "Pregunta" es obligatoria en el Forms, pero en Bávaro 341 de 348 envíos
      // llegaron sin ella y el Forms los aceptó; por eso aquí es opcional.
      obligatorios: ["fecha", "area", "chofer", "supervisor", "indicador",
        "porque0", "porque1", "porque2", "causaRaiz", "accionCorrectiva"],
      etiquetas: { descripcion: "Describe en una línea lo que ocurrió (solo para buscar casos, no se envía)" },

      areas: ["Distribución", "Almacén", "Otra area"],

      // En 5XQ hay una sola lista de indicadores, sin importar el área
      // ("Devolución Hectolitros" aparece dos veces en el Forms; aquí va una vez).
      indicadores: ["Tiempo medio liberación (TML)", "Tiempo en ruta", "Tiempo interno", "Devolución Hectolitros",
        "Ruta SIF", "Desviación KM", "Rotura distribución", "Rotura almacén", "Eficiencia de carga",
        "Devolución Facturas ", "Recompra", "Efectividad modulación ", "TMA (T1)", "TMA (T2)",
        "Descarga de Camiones", "Carga de Camiones", "Productividad de Picking", "Productividad de Sorting",
        "Productividad de Refugo", "Productividad de Reempaque", "Preparacion de Pedido", "Exactitud de Carga",
        "Edad de Productos (Frescura)", "Ocupacion Almacen", "Cumpliento FEFO", "Reorganizacion de AG",
        "Calidad de Carga T1 y T2", "Ausentismo", "Pre-post uso de MC", "Tiempo atencion a recarga T2",
        "Tiempo atencion a recarga Recompra", "Ejecucion Cambio de Turno", "Organizacion Picking",
        "Inventario Devolucion", "Balance de Masa", "Conteo inventario", "Rotular Almacen",
        "Diferencia de Inventario", "Horas extras", "DASHCAM", "Mantenimiento Correctivo", "Calidad Producto"],

      // Indicadores más usados en Bávaro (abr–oct 2026); salen primero en la lista
      masUsados: ["Tiempo medio liberación (TML)", "Devolución Hectolitros", "Carga de Camiones",
        "Productividad de Picking", "TMA (T1)", "Tiempo en ruta", "Rotura almacén",
        "Diferencia de Inventario", "Tiempo interno"],

      // "Supervisor" es texto libre en el Forms; estos son los que se usan en Bávaro
      supervisoresSugeridos: ["Luis Eduardo", "Luis Rosario", "Kervin Mercedes"],

      preguntas: {
        centro: "r0cc4279b014f4ab986800c48c9c5b5d9",
        fecha: "rf241cb124c544085977cbbb0b3efc27f",
        area: "r37edbdd7dd29485dacb29b0b3a3fec01",
        chofer: "ra49a292477d8480abc9943f7b3c0d565",
        areaConfirmacion: "re76f16c13336482dbd268c06e509de03",
        ruta: "rac1be16cc3b04363bc1e74ce074c338f",
        supervisor: "r1e86669b29414fa29b5dc1a6dab72b50",
        indicador: "r2936ff678df44efebf6b661e3b1e2d6c",
        porques: ["rf19eb2a9d1864c658146bb0c8a2915ab", "rd9bfe19e979042a995c1f898b6d688ab",
          "r97555bd1f4a14bc690a45ad92b2a3bcc", "r2139e39dad9447babeefc1378846c70a",
          "r497e87df0c90410db741e234f5b9123b"],
        causaRaiz: "r801b0655b7b440f08a87fc54eb54c13f",
        accionCorrectiva: "r9fc199442ebe455cb40cdd849de0de13",
        // Pregunta obligatoria del Forms sin título ni descripción ("Pregunta")
        pregunta: "r4252eb83554c45c0a0ac132b3849bffe"
      }
    }
  },

  // Plan de acción para DPO Evolution (dpo.arvolution.com).
  // La página solo prepara el plan; lo crea el marcador "Crear en DPO" (dpo/crear-en-dpo.js)
  // desde DPO, con la sesión de quien lo usa. Todo se puede corregir en la vista previa.
  // Códigos sacados de DPO el 29/10/2026.
  dpo: {
    location: "dc-bavaro",
    plazoDias: 14, // fecha límite sugerida
    reunion: "logistics-daily-4fa5ds59", // Diaria Logística

    // Herramienta de gestión (id de getAllManagementTool)
    herramienta: { relatos: "4", x5q: "1" }, // 4 = Reporte de Anomalía, 1 = 5 porqués

    pilarPorArea: { "Distribución": "DISTRIBUTION", "Almacén": "WAREHOUSE", "Control": "WAREHOUSE", "ADF": "FLEET" },

    // Indicador (sin espacios al final) → KPI de DPO. Primero se busca "Área|Indicador".
    // Si un indicador no está aquí, se elige el KPI en la vista previa.
    kpiPorIndicador: {
      // Relatos
      "Devolución Hectolitros": "DEVOLUCIÓN",
      "Devolución facturas": "DEVOLUCIÓN",
      "Devolución Salvadas": "DEVOLUCIÓN",
      "Modulacion de la devolucion": "EFECTIVIDAD_DE_MODULACIÓN",
      "TML": "TML",
      "Tiempo en ruta": "HORAS CALLE",
      "Tiempo interno": "TIEMPO_INTERNO",
      "% Rutas SIF": "RUTA_SIF",
      "Exceso de Jornada": "JORNADA_LABORAL",
      "Dispersion KM": "DESVIACIÓN_DE_DISTANCIA_KM",
      "Ocupación": "CAPACITY_OCUPATION",
      "Distribución|Roturas": "ROTURA_DE_BOTELLAS",
      "Almacén|Roturas": "ROTURAS_EN_ALMACEN",
      "Control|Roturas": "ROTURAS_EN_ALMACEN",
      "Productividad picking": "PRODUCTIVIDAD_DE_PICKING",
      "Reempaque": "PRODUCTIVIDAD_DE_REEMPAQUE",
      "Carga de camiones": "PRODUCTIVIDAD_DE_CARGA",
      "Exactitud de Inventario": "PRECISION_DE_INVENTARIO",
      "Rescate": "RESCATE_EN_RUTA",
      "Neumático": "RENDIMIENTO_DE_NEUMATICOS",
      "Mantenimiento Correctivo": "MANTENIMIENTO",
      "Mantenimiento Preventivo": "MANTENIMIENTO",
      "Pre-Uso Camion T2": "EFECTIVIDAD_CHECKLIST_T2",
      "Post-Uso Camion T2": "EFECTIVIDAD_CHECKLIST_T2",
      "Pre-Uso Montacargas": "EFECTIVIDAD_CHECKLIST_FLT",
      "Pots-Uso Montacargas": "EFECTIVIDAD_CHECKLIST_FLT",
      // 5XQ
      "Tiempo medio liberación (TML)": "TML",
      "Ruta SIF": "RUTA_SIF",
      "Desviación KM": "DESVIACIÓN_DE_DISTANCIA_KM",
      "Rotura distribución": "ROTURA_DE_BOTELLAS",
      "Rotura almacén": "ROTURAS_EN_ALMACEN",
      "Devolución Facturas": "DEVOLUCIÓN",
      "Efectividad modulación": "EFECTIVIDAD_DE_MODULACIÓN",
      "Carga de Camiones": "PRODUCTIVIDAD_DE_CARGA",
      "Productividad de Picking": "PRODUCTIVIDAD_DE_PICKING",
      "Productividad de Sorting": "PRODUCTIVIDAD_DE_SELECCION",
      "Productividad de Reempaque": "PRODUCTIVIDAD_DE_REEMPAQUE",
      "Edad de Productos (Frescura)": "FRESCURA",
      "Ocupacion Almacen": "UTILIZACION_DE_ALMACEN",
      "Ausentismo": "AUSENTISMO",
      "Diferencia de Inventario": "INVENTORY_DIFFERENCES",
      "Conteo inventario": "PRECISION_DE_INVENTARIO",
      "Pre-post uso de MC": "EFECTIVIDAD_CHECKLIST_FLT"
    },

    // Responsable (Relatos) o supervisor (5XQ) → usuario de DPO: [código, nombre en DPO].
    // Los que no están aquí se buscan por nombre en la vista previa.
    // Cuentas confirmadas por el usuario el 29/10/2026.
    personas: {
      "Luis Eduardo": ["luis-eduardo-rosario-mordan-goejvigh", "LUIS EDUARDO ROSARIO MORDAN"],
      "Luis Rosario": ["luis-eduardo-rosario-mordan-goejvigh", "LUIS EDUARDO ROSARIO MORDAN"],
      "Freyky Reyes": ["freyky-reyes-mercedes-g8s89ez3", "Freyky Reyes Mercedes"],
      "Gregori Agramonte": ["gregori-jhasmel-agramonte-luiek6fn", "GREGORI JHASMEL AGRAMONTE"],
      "Kervin Mercedes": ["kervin-migue-mercedez-60cjw4ts", "Kervin Migue Mercedez"],
      "Carlos de la Cruz": ["carlos-german-lvnjb0cl", "CARLOS GERMAN"],
      "Jorge Reyes": ["jorge-ramon-reyes-ramirez-th5eyadm", "JORGE RAMON REYES RAMIREZ"]
    }
  }
};
