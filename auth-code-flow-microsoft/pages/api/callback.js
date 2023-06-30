import { encode } from "@/utils/encode";
import querystring from "node:querystring";

const MICROSOFT_TOKEN_URL = "https://login.microsoftonline.com/common/oauth2/v2.0/token";

export default async function handler(req, res) {
  console.log("req.query: ", req.query);
  console.log("req.body: ", req.body);
  console.log("req.method: ", req.method);
  console.log("req.url: ", req.url);
  const clientAuth = encode(`${process.env.MICROSOFT_CLIENT_ID}:${process.env.MICROSOFT_CLIENT_SECRET}`);
  console.log("clientAuth: ",clientAuth);
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${clientAuth}`,
    },
    body: querystring.stringify({
      code: req.query.code,
      redirect_uri: process.env.MICROSOFT_REDIRECT_URI,
      grant_type: "authorization_code",
    })
  }
  ;

  try {
    const response = await fetch(MICROSOFT_TOKEN_URL, options);
    const data = await response.json();
    console.log("data callback: ", data);

    res.setHeader("Set-Cookie", `access_token=${data.access_token}; Path=/; HttpOnly; expires=${new Date(data.expires_in * 1000 + Date.now()).toUTCString()}`);

    res.writeHead(302, { Location: "/home" });
    res.end();
  } catch (error) {
    console.error(error);
  }
}
