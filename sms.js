// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const sendMessage =async ({message,sender})=>{
    require('dotenv').config()
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber = process.env.TWILIO_NUMBER;
const myNumber = process.env.MY_NUMBER;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: `${message} 
     --From ${sender}`,
     from: twilioNumber,
     to: myNumber
   })
}

module.exports={sendMessage}