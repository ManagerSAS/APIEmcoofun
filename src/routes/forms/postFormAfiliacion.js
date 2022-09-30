const { Router } = require("express")
var cors = require('cors')
const router = Router()
const mailconfig  = require('../../config/mailer')
const _ = require('underscore')


router.post('/postFormAfiliacion', cors(), async(req, res) => {       
    const { 
        Correo,
        typeId,
        NDocument,
        Nombre1,
        Nombre2,
        Apellido1,
        Apellido2,
        Genero,
        dateBirth,
        numPhone1,
        numPhone2,
        Direccion1,
        Direccion2,
        EstadoCivil,
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
                        <b>Datos de la Afiliacion</b>
                    </p>
                </td>
            </tr>
            <tr style="background-color: #bbbbbb14;">
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        <b>Correo electrónico:</b>
                    </p>
                </td>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        ${ Correo }
                    </p>
                </td>
            </tr>
            <tr>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        <b>Numero Documento:</b>
                    </p>
                </td>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        ${ NDocument } - ${ typeId }
                    </p>
                </td>
            </tr>
            <tr style="background-color: #bbbbbb14;">
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        <b>Nombre Completo:</b>
                    </p>
                </td>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        ${ Nombre1 } ${ Nombre2 } ${ Apellido1 } ${ Apellido2 }
                    </p>
                </td>
            </tr>
            <tr>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        <b>Genero:</b>
                    </p>
                </td>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        ${ Genero }
                    </p>
                </td>
            </tr>
            <tr>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        <b>Fecha de nacimiento:</b>
                    </p>
                </td>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        ${ dateBirth }
                    </p>
                </td>
            </tr>
            <tr>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        <b>Numero de Contacto :</b>
                    </p>
                </td>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        ${ numPhone1 }
                    </p>
                </td>
            </tr>
            <tr>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        <b>Numero de Contacto (opcional):</b>
                    </p>
                </td>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        ${ numPhone2 }
                    </p>
                </td>
            </tr>
            <tr>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        <b>Direccion de residencia: </b>
                    </p>
                </td>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        ${ Direccion1 }
                    </p>
                </td>
            </tr>
            <tr>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        <b>Direccion de residencia (opcional):</b>
                    </p>
                </td>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        ${ Direccion2 }
                    </p>
                </td>
            </tr>
            <tr>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        <b>Estado civil:</b>
                    </p>
                </td>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        ${ EstadoCivil }
                    </p>
                </td>
            </tr>
        </table>      
    `
         const response = await mailconfig.sendMail({
            from: '"Novedad empresarial:" <no-reply@gmail.com>',
            // to: "radicadorvillavicencio@losolivos.co, ccarteravillavicencio@losolivos.co",
            to: "desarrollo@agenciamanager.com",
            subject: "Novedades Empresariales y Afiliaciones ✔",
            html: bodyEmail,
        }).catch(console.error)

        if(response){
            res.status(200).send({
                message: "Mensaje enviado correctamente "
            })
       } 
})
module.exports = router