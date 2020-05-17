const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWellcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'aleksandr.guzhyk@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Wellocme to the app, ${name}. Let me know how you get along with the app`
  })
}

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'aleksandr.guzhyk@gmail.com',
    subject: 'Sorry to see you go!',
    text: `Goodbye, ${name}. I hope to see you some time oon.`
  })
}

module.exports = {
  sendWellcomeEmail,
  sendCancelationEmail
}