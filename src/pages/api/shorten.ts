import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const rawBody = await request.text();

  console.log("RAW BODY:", rawBody);
  console.log("CONTENT TYPE:", request.headers.get("content-type"));

  let body = null;

  try {
    body = JSON.parse(rawBody);
  } catch {
    return new Response(
      JSON.stringify({
        error: "JSON inválido",
        rawBody,
      }),
      {
        status: 400,
        headers: { "content-type": "application/json" },
      }
    );
  }

  if (!body?.url) {
    return new Response(
      JSON.stringify({
        error: "Falta url",
        body,
      }),
      {
        status: 400,
        headers: { "content-type": "application/json" },
      }
    );
  }

  const res = await fetch("https://api.short.io/links", {
    method: "POST",
    headers: {
      authorization: import.meta.env.API_IO_KEY,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      originalURL: body.url,
      domain: import.meta.env.SHORTIO_DOMAIN,
    }),
  });

  const text = await res.text();

  return new Response(text, {
    status: res.status,
    headers: { "content-type": "application/json" },
  });
};