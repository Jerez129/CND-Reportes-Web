// Cloudflare Worker: recibe el reporte desde la página de GitHub Pages
// y lo reenvía a Microsoft Forms (el navegador no puede hacerlo por CORS).
//
// Variables de entorno (en el panel de Cloudflare o en wrangler.toml):
//   ALLOWED_ORIGIN  ->  p. ej. https://jerez129.github.io

// Solo se puede enviar a estos formularios: así el Worker no sirve como proxy abierto.
const FORMULARIOS = {
  relatos: "https://forms.office.com/formapi/api/cef04b19-7776-4a94-b89b-375c77a8f936/users/4b27a25b-ded7-4902-8b33-af2a5cf7674f/forms('GUvwznZ3lEq4mzdcd6j5NluiJ0vX3gJJizOvKlz3Z09UME1WWFlDU0FYRURQNkg1WExQMVQ4SUI0MC4u')/responses",
  x5q: "https://forms.office.com/formapi/api/cef04b19-7776-4a94-b89b-375c77a8f936/users/4b27a25b-ded7-4902-8b33-af2a5cf7674f/forms('GUvwznZ3lEq4mzdcd6j5NluiJ0vX3gJJizOvKlz3Z09URVJQTDlFWktSQlZMTlVEUVA5OVdBTFgzRS4u')/responses"
};

export default {
  async fetch(request, env) {
    const origen = request.headers.get("Origin") || "";
    const permitido = env.ALLOWED_ORIGIN || "";
    const cors = {
      "Access-Control-Allow-Origin": permitido,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Vary": "Origin"
    };
    const responder = (texto, status) =>
      new Response(texto, { status, headers: { ...cors, "Content-Type": "text/plain; charset=utf-8" } });

    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });
    if (request.method !== "POST") return responder("Método no permitido", 405);
    if (!permitido || origen !== permitido) return responder("Origen no permitido", 403);

    let cuerpo;
    try {
      cuerpo = await request.json();
    } catch {
      return responder("JSON inválido", 400);
    }

    const url = FORMULARIOS[cuerpo.formulario];
    const answers = cuerpo.answers;
    const valido = url && Array.isArray(answers) && answers.length > 0 && answers.length <= 30 &&
      answers.every((a) => a && typeof a.questionId === "string" && /^r[0-9a-f]{32}$/.test(a.questionId) &&
        typeof a.answer1 === "string" && a.answer1.length <= 4000);
    if (!valido) return responder("Datos del reporte inválidos", 400);

    const ahora = new Date().toISOString();
    const payload = {
      answers: JSON.stringify(answers), // Forms espera las respuestas como texto JSON
      emailReceiptConsent: false,
      startDate: ahora,
      submitDate: ahora
    };

    const resp = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(payload)
    });

    if (resp.ok) return responder("OK", 200);
    const detalle = (await resp.text()).slice(0, 500);
    return responder(`Forms respondió ${resp.status}: ${detalle}`, 502);
  }
};
