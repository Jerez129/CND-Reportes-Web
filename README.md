# Reportes CND (web) — DC Bávaro

Versión web de **CND-RelatosAnomalia** y **CND-5XQ** en una sola página, solo para el centro de Bávaro.

1. Llenas los datos del reporte (área, indicador, responsable…).
2. Escribes en una línea lo que pasó y la página te propone los casos más parecidos.
3. Eliges uno, lo ajustas a lo que pasó y das clic en **Enviar reporte**.

```
GitHub Pages (index.html)  →  Cloudflare Worker (worker/)  →  Microsoft Forms
```

El navegador no puede enviar directo a Microsoft Forms porque lo bloquea CORS. El Worker hace el envío, igual que el `HttpClient` de las aplicaciones de escritorio.

## Archivos

| Archivo | Para qué |
|---|---|
| `index.html`, `styles.css`, `app.js` | La página |
| `config.js` | Centro, responsables, indicadores, IDs de preguntas y la URL del Worker |
| `data/casos-*.js` | Casos de 5 porqués, escritos de forma general, por indicador (Distribución, Almacén, ADF y 5XQ) |
| `worker/worker.js` | El Worker que reenvía a Forms. Solo acepta los 2 formularios configurados |

## Probar en tu computadora

Abre `index.html` con doble clic. No hace falta servidor.

## Modo prueba

Si `workerUrl` en `config.js` está vacío, o abres la página con `?prueba`, la página **no envía nada**. Solo muestra el JSON que mandaría.

## Publicar

### 1. Worker (Cloudflare, gratis)

1. Crea una cuenta en https://dash.cloudflare.com
2. **Workers & Pages → Create → Worker**, pega el contenido de `worker/worker.js` y despliega.
3. En **Settings → Variables**, agrega `ALLOWED_ORIGIN` = `https://<tu-usuario>.github.io`
4. Copia la URL del Worker (algo como `https://cnd-reportes.<tu-cuenta>.workers.dev`).

### 2. Página (GitHub Pages)

1. Pon la URL del Worker en `workerUrl` dentro de `config.js`.
2. Sube esta carpeta a un repositorio de GitHub.
3. **Settings → Pages → Deploy from a branch → main / root**.

## Casos (`data/casos-*.js`)

1,290 casos escritos para esta herramienta, tomando como referencia los problemas que aparecen en los Forms de todos los centros, pero **sin copiar ninguna respuesta real**. Los archivos `casos-samana-*.js` agregan 10 casos más a cada indicador, inspirados en los problemas que reporta DC Samaná (clientes sin dinero en zonas lejanas, mayoristas, botellas explotadas, bajo líquido, perfiles de patana, etc.). Reglas:

- **Nada específico:** sin clientes, negocios, rutas, fichas, placas, códigos, personas ni cifras exactas. Lo único permitido son **nombres de productos** (Presidente, Brahma, Malta Morena…).
- **Sin repetir:** dentro de cada indicador, cada caso tiene una causa raíz distinta.
- **Cantidad por uso en Bávaro:** 30 casos en los más usados, 20 en los de uso medio y 15 en los de poco uso.

Cada lista usa **el nombre exacto del indicador en el Forms** (sin los espacios del final):

- Relatos: `"Relatos|Área|Indicador"`, por ejemplo `"Relatos|Distribución|TML"`. El área Control usa las listas de Almacén.
- 5XQ: `"5XQ|Indicador"`, por ejemplo `"5XQ|Diferencia de Inventario"`.
- Los indicadores de 5XQ que son lo mismo que uno de Relatos (por ejemplo "Tiempo medio liberación (TML)") comparten su lista; eso está en `DATOS.igual`, al final de `casos-5xq-2.js`.

Cada caso es una línea con 7 textos: `[1.er porqué, 2.º, 3.º, 4.º, 5.º, causa raíz, acción correctiva]`. Para agregar uno, copia una línea en la lista del indicador y cambia los textos. Para agregar una tanda nueva sin tocar los archivos existentes, crea otro archivo con `DATOS.agregar("clave", [ ... ])` (como los `casos-samana-*.js`) y agrégalo en `index.html`.

## Controles al enviar

- Si el análisis tiene un código, un número largo, el nombre de un negocio o de una persona, la página **no deja enviar** y marca el campo. Ruta y Chofer no se revisan porque el Forms los pide.
- La página recuerda (en este navegador) los casos que ya usaste: salen al final con la etiqueta "Ya lo usaste". Tampoco deja enviar dos veces el mismo análisis.

## Si cambian los formularios

`config.js` se copió de los Forms el 21/10/2026 con las opciones **exactas**, incluidos los espacios al final (por ejemplo `"TMA "` o `"Si "`). Si alguien cambia un Forms (agrega un responsable o un indicador), hay que actualizar `config.js` con el texto exacto de la opción y crear su lista de casos con ese mismo nombre.

- **Relatos:** el responsable sale de la pregunta "Responsable -DOA8", que es la de Bávaro. El área "Control" usa los indicadores de Almacén, igual que en el Forms.
- **5XQ:** hay una sola lista de indicadores. El supervisor es texto libre. "Pregunta" es obligatoria en el Forms, pero aquí es opcional: en Bávaro 341 de 348 envíos llegaron sin ella y el Forms los aceptó.
- `masUsados` pone primero los indicadores que más se usan en Bávaro (abril–octubre 2026).

## Plan de acción en DPO Evolution

Después de enviar un reporte aparece **Copiar plan para DPO**. El plan se crea en DPO con el marcador **Crear en DPO** (instrucciones en `dpo.html`):

```
Reportes CND → (portapapeles) → marcador en dpo.arvolution.com → CreateEditActionLog
```

La página no puede crear la acción directo: DPO solo acepta la sesión de quien está dentro de `dpo.arvolution.com`. Por eso el marcador carga `dpo/crear-en-dpo.js` dentro de DPO, muestra una vista previa que se puede corregir y crea **una** acción en estado `OPEN`. Nunca cierra ni cambia acciones existentes.

| Campo en DPO | Sale de |
|---|---|
| Acción (`description`) | Acción correctiva |
| Nota (`note`) | Causa raíz, reporte, fecha, área e indicador |
| KPI (`KPIs`) | `dpo.kpiPorIndicador` en `config.js` (si falta, se elige en la vista previa) |
| Pilar (`pillar`) | `dpo.pilarPorArea` |
| Herramienta de gestión (`managementTool`) | 5XQ → `1` (5 porqués), Relatos → `4` (Reporte de Anomalía) |
| Reunión (`meeting`) | `dpo.reunion` (Diaria Logística) |
| Dueño y responsables | Responsable (Relatos) o supervisor (5XQ), con `dpo.personas`; si no está, se busca por nombre |
| Fecha límite (`endDate`) | Hoy + `dpo.plazoDias` (14) |

Los códigos de KPIs, reuniones, herramientas y usuarios se sacaron de DPO el 29/10/2026.

## Notas

- Las exportaciones de los Forms tienen datos personales: **no las guardes en esta carpeta** (el `.gitignore` excluye `.xlsx` y `.csv`).
- Las URL de los formularios y los IDs de las preguntas quedan visibles en el repositorio público.
