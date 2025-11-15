import fetch from "node-fetch";

export async function handler() {
  const res = await fetch("https://winovo.io/api/creator/clear", {
    method: "POST",
    headers: {
      "x-creator-auth": process.env.CREATOR_KEY
    }
  });

  const data = await res.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
}
