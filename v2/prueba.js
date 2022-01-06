const WebpayPlus = require("transbank-sdk").WebpayPlus;
const Environment = require('transbank-sdk').Environment;


WebpayPlus.commerceCode = 597055555532;
WebpayPlus.apiKey = '579B532A7440BB0C9079DED94D31EA1615BACEB56610332264630D42D0A36B1C';
WebpayPlus.environment = Environment.Integration;


let date = new Date();
let buyOrder = "B" + date.getTime();
let sessionId = "S" + date.getTime();
let amount = 20000;
let returnUrl = 'https://dev.customer.api.tutenlabs.dev/webpay/commit-tx';


(async () => {
  try {
    const response = await WebpayPlus.Transaction.create(buyOrder, sessionId, amount, returnUrl);

    console.info(response);
  } catch (e) {
    console.error(e);
  }
})();
