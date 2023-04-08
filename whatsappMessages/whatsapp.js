// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
require('dotenv').config()
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const myNumber = process.env.MY_NUMBER
// const client = require('twilio')(accountSid, authToken);

// client.messages
//       .create({
//          from: 'whatsapp:+14155238886',
//          body: 'Hello there!',
//          to: `whatsapp:${myNumber}`
//        })
//     //   .then(message => console.log(message.sid));
//       .then(message => console.log(message)).catch((err)=>console.log(err))


      
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     mediaUrl: ['https://images.unsplash.com/photo-1545093149-618ce3bcf49d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'],
     from: 'whatsapp:+14155238886',
     to: 'whatsapp:+2348108498996'
   })
  .then(message => console.log(message.sid));