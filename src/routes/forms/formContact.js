const { Router } = require("express")
var cors = require('cors')
const router = Router()
const mailconfig  = require('../../config/mailer')
const _ = require('underscore')


router.post('/formulario-contacto', cors(), async(req, res) => {
            
    const { 
        nombre, 
        email,         
        documento,
        telefono, 
        ciudad,
        asunto,
        mensaje
    } = req.body
    let bodyEmail = `
        <div style="pading-left:50px; pading-right:50px;">
            <table width="600px">
                <tr style="background-color: #bbbbbb14;">
                    <td style="padding: 10px;" colspan="2">
                        <img src="https://i.postimg.cc/bw0zKrQw/logo.png" alt="" height="50px">
                    </td>
                </tr>
                <tr style="background-color: #119064f5;">
                    <td style="padding-top: 15px; text-align: center;" colspan="2">
                        <p style="color: white; font-family: Arial;">
                            <b>Datos del cliente</b>
                        </p>
                    </td>
                </tr>
                <tr style="background-color: #bbbbbb14;">
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            <b>Nombre</b>
                        </p>
                    </td>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            ${ nombre }
                        </p>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            <b>Numero de documento:</b>
                        </p>
                    </td>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            ${ documento }
                        </p>
                    </td>
                </tr>
                <tr style="background-color: #bbbbbb14;">
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            <b>Correo Electronico</b>
                        </p>
                    </td>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            ${ email }
                        </p>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            <b>Numero de telefono</b>
                        </p>
                    </td>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            ${ telefono }
                        </p>
                    </td>
                </tr>  
                <tr>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            <b>Ciudad: </b>
                        </p>
                    </td>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            ${ ciudad }
                        </p>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            <b>mensaje: </b>
                        </p>
                    </td>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            ${ mensaje }
                        </p>
                    </td>
                </tr>
        </table>
    </div>   
    `
     const response = await mailconfig.sendMail({
        from: '"Datos del cliente " <no-reply@gmail.com>',
            // to: "radicadorvillavicencio@losolivos.co, ccarteravillavicencio@losolivos.co",
            to: "desarrollo@agenciamanager.com",
            subject: asunto,
            html: bodyEmail,
        }).catch(console.error)

        if(response){
            res.status(200).send({
                message: "Mensaje enviado correctamente ",
                asunto: asunto,
                from: nombre
            })
       } 
})

module.exports = router