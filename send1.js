const accountSid = 'AC7501bccdfdb9428ddae305aedd9809a1'; 
const authToken = '[6d630d6c19458064910718a9e06e4e01]'; 
const client = require('twilio')(accountSid, authToken); 
 
client.messages 
      .create({ 
         body: 'Hi precious, this is Kehinde messaging you',  
         messagingServiceSid: 'MG0e333a10a98d2116a709e3f807e5a0e2',      
         to: '+2348108498996' 
       }) 
      .then(message => console.log(message.sid)) 
      .done();