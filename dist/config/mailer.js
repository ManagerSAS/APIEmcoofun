"use strict";

var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: 'webserfunllanos@gmail.com',
    pass: 'lvqowsjbnmcquyoe'
  }
}); // transporter.verify().then(() => {
//     console.log('Ready for send emails')
// })

module.exports = transporter;