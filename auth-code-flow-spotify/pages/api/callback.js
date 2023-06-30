import { encode } from "@/utils/encode";
import querystring from "node:querystring";

const SPOTIFY_TOKEN_URL = "https://accounts.spotify.com/api/token";

export default async function handler(req, res) {
  const clientAuth = encode(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`);
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${clientAuth}`,
    },
    body: querystring.stringify({
      code: req.query.code,
      redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
      grant_type: "authorization_code",
    })
  }
  ;

  try {
    const response = await fetch(SPOTIFY_TOKEN_URL, options);
    const data = await response.json();

    res.setHeader("Set-Cookie", `access_token=${data.access_token}; Path=/; HttpOnly; expires=${new Date(data.expires_in * 1000 + Date.now()).toUTCString()}`);

    res.writeHead(302, { Location: "/home" });
    res.end();
  } catch (error) {
    console.error(error);
  }
}
