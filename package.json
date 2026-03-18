// netlify/functions/anthropic.js
// Netlify Serverless Function — proxy seguro para a API da Anthropic.

exports.handler = async function (event) {
  // CORS preflight
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: "ANTHROPIC_API_KEY não configurada." }) };
  }

  try {
    const payload = JSON.parse(event.body || "{}");

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "anthropic-beta": "pdfs-2024-09-25",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    console.log("Anthropic status:", response.status);
    console.log("Anthropic response keys:", Object.keys(data));
    console.log("Content length:", data.content?.length);
    console.log("Stop reason:", data.stop_reason);
    if (data.error) console.log("Anthropic error:", JSON.stringify(data.error));
    return { statusCode: response.status, headers, body: JSON.stringify(data) };
  } catch (err) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: err.message || "Erro interno." }) };
  }
};
