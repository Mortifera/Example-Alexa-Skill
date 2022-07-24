**Instructions**

1. Setup AWS CLI locally
2. Configure local AWS credentials (create IAM user with permissions, get the programmatic credentials, then run ```aws configure``` command and give the CLI the credentials when asked)
3. Go to Alexa developer site and do any needed account setup
4. Setup ASK CLI locally (Alexa's cli)
5. Go to Alexa website, and note down your Alexa vendor ID.
6. Setup Login with Amazon https://developer.amazon.com/loginwithamazon/console/site/lwa/overview.html
7. Note down LWA clientId and secretId
8. ```npx ask configure```
9.  npx ask util generate-lwa-tokens --client-id "YOUR LWA CLIENT ID" --client-confirmation "YOUR LWA SECRET ID" --scopes "alexa::ask:skills:readwrite alexa::ask:models:readwrite"
10. Note down the REFRESH TOKEN value from the LWA response
11. Put these values in packages/example-alexa-skill-infra/.env file under ALEXA_VENDOR_ID, LWA_CLIENT_ID, LWA_CLIENT_SECRET, and LWA_REFRESH_TOKEN.
12. ```npm install```, ```npm run boostrap```, and ```npm run deploy```
13. Open Alexa console
