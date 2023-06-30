
## Flujo implementado en microsoft: 
- https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow-microsoft
- https://learn.microsoft.com/en-us/azure/active-directory/develop/scenario-spa-app-registration#redirect-uri-msaljs-20-with-auth-code-flow-microsoft
- https://learn.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app

ejemplos de microsoft para oauth: 
- https://learn.microsoft.com/en-us/azure/active-directory/develop/sample-v2-code?tabs=apptype
- https://github.com/Azure-Samples/ms-identity-javascript-tutorial/tree/main

## Azure para desarrolladores:
- https://portal.azure.com/
- https://portal.azure.com/#view/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/~/RegisteredApps

nombre app: app-auth-code-flow-microsoft
tipo cuenta: "AzureADandPersonalMicrosoftAccount", para modificar esto puede ir a manifiesto y actualizar la llave "signInAudience"
app tipo web: http://localhost:3000
clic a [registrar]

usar Id. de aplicación en esta app.

ir a "Certificates & secrets ->  Certificates & secrets -> Client secrets -> New client secret." para crear una token de acceso

scopes: https://learn.microsoft.com/en-us/azure/active-directory/develop/permissions-consent-overview
https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow

## API grph de microsoft
- https://learn.microsoft.com/en-us/graph/api/resources/user?view=graph-rest-1.0
- https://learn.microsoft.com/en-us/graph/api/user-list-contacts?view=graph-rest-1.0&tabs=http

## Tutorial platzi: 
- https://platzi.com/clases/7197-oauth/61115-spotify-authorization-code-flow/