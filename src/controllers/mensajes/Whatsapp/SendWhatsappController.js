
// const twilio = require('twilio');
// const axios = require('axios');
// const Nexmo = require('nexmo');
const {ACCOUNTSID, AUTH_TOKEN,APIKEY,APISECRET} = process.env
const SendWhatsappController = (req) =>{

// //!mensajes de whatsapp twilio ok

// const accountSid = ACCOUNTSID;
// const authToken = AUTH_TOKEN;
// const client = require('twilio')(accountSid, authToken);

// client.messages
//     .create({
//         body: 'eres el mejor de todos los programadores no se te olvide y muchas gracias por la ayuda parcero un cruce es un favor jajaja',
//         from: 'whatsapp:+14155238886',
//         to: 'whatsapp:+56983917124'
//     })
//     .then(message => console.log(message.sid))
//     .catch(error => console.error('Error al enviar el mensaje:', error));
   

//! mensajes de texto con twilio ok
//   const fromPhoneNumber = '+12515774918';
// const toPhoneNumber = '+573104964755';
// const messageBody = 'Hola, este es un mensaje de texto enviado desde Node.js con Twilio!';

// client.messages
//   .create({
//     body: messageBody,
//     from: fromPhoneNumber,
//     to: toPhoneNumber
//   })
//   .then(message => console.log('Mensaje enviado:', message.sid))
//   .catch(error => console.error('Error al enviar el mensaje:', error));



//? mensaje de whatsapp enviado con nexmo
// const url = 'https://messages-sandbox.nexmo.com/v1/messages';
// const apiKey = APIKEY,
// const apiSecret = APISECRET

// const auth = {
//   username: apiKey,
//   password: apiSecret
// };

// const data = {
//   from: '14157386102',
//   to: '3222826226',
//   message_type: 'text',
//   text: 'hola yeral te llego este mensaje',
// //   text: 'Hola, oscar como estas  esto es nexmo para el envio de mensajeria se ve bueno y no creo que sea tan caro como twilio -- mensaje de whatsapp -- hablame estiven',
//   channel: 'whatsapp'
// };

// axios.post(url, data, {
//   auth: auth,
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json'
//   }
// })
// .then(response => {
//   console.log('Mensaje enviado:', response.data);
// })
// .catch(error => {
//   console.error('Error al enviar el mensaje:', error);
// });


// //? mensaje de texto con nexmo
// const nexmo = new Nexmo({
//     apiKey: APIKEY,
//     apiSecret: APISECRET
//   });
  
//   const fromPhoneNumber = '14157386102';
//   const toPhoneNumber = '3046682396';
//   const messageText = 'Hola, oscar como estas  esto es nexmo para el envio de mensajeria se ve bueno y no creo que sea tan caro como twilio-- mensaje de texto -- hablame estiven ';
  
//   nexmo.message.sendSms(fromPhoneNumber, toPhoneNumber, messageText, (err, responseData) => {
//     if (err) {
//       console.error('Error al enviar el mensaje:', err);
//     } else {
//       console.log('Mensaje enviado:', responseData.messages[0]);
//     }
//   });

return "mensajes whatsapp"
}

module.exports = SendWhatsappController