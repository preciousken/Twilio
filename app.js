const express = require('express')
const cors = require('cors')
const { sendMessage } = require('./sms')
const app = express()
require('dotenv').config()

const recipientName = process.env.MESSAGE_RECEIPIENT_NAME

app.use(express.json())
app.use(cors())

app.post('/send',async(req,res)=>{

     // getting the form data
     body = req.body

    //  Handling error if no message was provided
     if(!body.message){
         error='MESSAGE_ERROR',
         res.status(401).json({
             error:error,
             message:`You haven't provided a message`
         })
         return;
     }


     //  Handling error if no sender was provided
     if(!body.sender){
        error='SENDER_ERROR',
        res.status(401).json({
            error:error,
            message:`You haven't provided a message`
        })
        return;
    }

    //  Handling error if sender is not a Number was provided
    if((typeof(body.message)) === Number){
        error='SENDER_ERROR',
        res.status(401).json({
            error:error,
            message:`Sender must a name`
        })
        return;
    }


    try {

         // send a message to precious
    sendMessage({
        message:body.message,
        sender:body.sender
    })
    
    res.status(400).json({
        status:true,
        message:`message has been delivered to ${recipientName}`
    })
      return;          
    } catch (error) {
        console.log(error)
        error='UNKNOWN_ERROR',
        res.status(500).json({
            error:error,
            message:`You've got some errors`
        })
        return;
    }
})

port = process.env.PORT

app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
})