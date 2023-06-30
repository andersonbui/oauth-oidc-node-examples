import querystring from 'node:querystring';
const MICROSOFT_AUTH_URL = "https://login.microsoftonline.com/common/oauth2/v2.0/authorize";

export default function handler(req, res) {
  const resourceId = "https://outlook.office.com/.default";
  const scopes = [
    "Mail.Read",
    "User.Read",
    "User.ReadBasic.All",
    "Contacts.Read" 
  ];

  const query = querystring.stringify({
    response_type: "code",
    client_id: process.env.MICROSOFT_CLIENT_ID,
    scope: scopes.join(" "),
    redirect_uri: process.env.MICROSOFT_REDIRECT_URI,
  });

  res.writeHead(302, { Location: `${MICROSOFT_AUTH_URL}?${query}` });
  res.end();
}
