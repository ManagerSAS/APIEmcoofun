const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth:{
        user: 'webemcoofun@gmail.com',
        pass: 'zhrmxlcutkjawytv'
    },
})

// transporter.verify().then(() => {
//     console.log('Ready for send emails')
// })

module.exports = transporter