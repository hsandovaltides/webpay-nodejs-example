const WebpayPlus = require("transbank-sdk").WebpayPlus;
const Environment = require('transbank-sdk').Environment;
const IntegrationApiKeys = require('transbank-sdk').IntegrationApiKeys;
const IntegrationCommerceCodes = require('transbank-sdk').IntegrationCommerceCodes;
const Options = require('transbank-sdk').Options;

const tx = new WebpayPlus.Transaction(new Options(IntegrationCommerceCodes.WEBPAY_PLUS, IntegrationApiKeys.WEBPAY, Environment.Integration));

let date = new Date();
let buyOrder = "B" + date.getTime();
let sessionId = "S" + date.getTime();
let amount = 20000;
let returnUrl = 'https://dev.customer.api.tutenlabs.dev/webpay/commit-tx';


(async () => {
  try {
    const response = await tx.create(buyOrder, sessionId, amount, returnUrl);

    console.info(response);
  } catch (e) {
    console.error(e);
  }
})()
