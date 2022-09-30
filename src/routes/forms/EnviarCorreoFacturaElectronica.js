const { Router } = require("express")
var cors = require('cors')
const router = Router()
const mailconfig  = require('../../config/mailer')
const _ = require('underscore')

router.post('/EnviarCorreoFacturaElectronica', cors(), async(req, res) => {
    const { 
        NumIdentificacion,
        identificacion,
        Nombre,
        NumeroTelefono,
        Email,
        Ciudad,
        Direccion
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
                            <b>Nombre Empresa / persona</b>
                        </p>
                    </td>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            ${Nombre} 
                        </p>
                    </td>
                </tr>
                <tr style="background-color: #bbbbbb14;">
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            <b>Numero de Identificacion</b>
                        </p>
                    </td>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            ${ NumIdentificacion } ${identificacion} 
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
                            ${ NumeroTelefono }
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
                            ${ Email }
                        </p>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            <b>Ciudad</b>
                        </p>
                    </td>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            ${ Ciudad }
                        </p>
                    </td>
                </tr> 
                <tr>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            <b>Direccion</b>
                        </p>
                    </td>
                    <td style="padding: 5px;">
                        <p style="font-family: Arial;">
                            ${ Direccion }
                        </p>
                    </td>
                </tr>
            </table>
        </div>   
    `
    
    const response = await mailconfig.sendMail({
        from: '"Solicitud Factura Electronica" <no-reply@gmail.com>',
        // to: "radicadorvillavicencio@losolivos.co, ccarteravillavicencio@losolivos.co",
        to: "desarrollo@agenciamanager.com",
        subject: "Datos Para FActura Electronica",
        html: bodyEmail,
    }).catch(console.error)

    if(response){
        res.status(200).json({
            error: false,
        })
    }
    else{
        throw err;
    }

})
module.exports = router
