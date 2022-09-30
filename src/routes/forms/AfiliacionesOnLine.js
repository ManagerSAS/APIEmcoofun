const { Router } = require("express")
const cors = require('cors')
const router = Router()
const mysqlConnection = require('../../config/mysql')
const mailconfig  = require('../../config/mailer')
const _ = require('underscore')

router.post('/AfiliacionesOnLine', cors(), async(req, res) => {
            
    const { 
        Correo,
        NDocument, 
        Nombre1, 
        Nombre2, 
        Apellido1, 
        Apellido2, 
        Genero,
        dateBirth, 
        typeId,
        numPhone1, 
        numPhone2, 
        Direccion1, 
        Direccion2, 
        EstadoCivil, 
        Idpago,
        fecha_registro,
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
                        <b>Auxilios</b>
                    </p>
                </td>
            </tr>
            <tr style="background-color: #bbbbbb14;">
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        <b>Tipo de tramite:</b>
                    </p>
                </td>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                       Afiliacion en linea
                    </p>
                </td>
            </tr>
            <tr>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        <b>Correo Electronico</b>
                    </p>
                </td>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        ${Correo}
                    </p>
                </td>
            </tr>
            <tr style="background-color: #bbbbbb14;">
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        <b>Numero Documento:</b>
                    </p>
                </td>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        ${ NDocument }
                    </p>
                </td>
            </tr>
            <tr>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        <b>Nombres: </b>
                    </p>
                </td>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        ${Nombre1} ${Nombre2}
                    </p>
                </td>
            </tr>
            <tr>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        <b>Apellidos</b>
                    </p>
                </td>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        ${ Apellido1 } ${Apellido2}
                    </p>
                </td>
            </tr>
            <tr>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        <b>Genero: </b>
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
                        <b>dateBirth</b>
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
                        <b>Tipo Identificacion:</b>
                    </p>
                </td>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        ${ typeId }
                    </p>
                </td>
            </tr>
            <tr>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        <b>Numero de Contacto:</b>
                    </p>
                </td>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        ${ numPhone1 } - ${numPhone2}
                    </p>
                </td>
            </tr>
            <tr>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        <b>Direcciones: </b>
                    </p>
                </td>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        ${ Direccion1 } - ${Direccion2}
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
            <tr>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        <b>Referencia de pago:</b>
                    </p>
                </td>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        ${ Idpago }
                    </p>
                </td>
            </tr>
            <tr>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        <b>Fecha de registro:</b>
                    </p>
                </td>
                <td style="padding: 5px;">
                    <p style="font-family: Arial;">
                        ${ fecha_registro }
                    </p>
                </td>
            </tr>
        </table> 
    `    
    const query = `INSERT INTO afiliaciononline(Correo, NDocument,  Nombre1,  Nombre2,  Apellido1,  Apellido2,  Genero, dateBirth,  typeId, numPhone1,  numPhone2,  Direccion1,  Direccion2,  EstadoCivil,  Idpago, fecha_registro) SELECT '${Correo}','${NDocument}', '${Nombre1}', '${Nombre2}', '${Apellido1}', '${Apellido2}', '${Genero}','${dateBirth}', '${typeId}','${numPhone1}', '${numPhone2}', '${Direccion1}', '${Direccion2}', '${EstadoCivil}', '${Idpago}','${fecha_registro}' FROM DUAL WHERE NOT EXISTS (SELECT NDocumento FROM obituarios WHERE NDocumento = '${NDocument}')`
    
    mysqlConnection.query(query, (err, rows, fields) => { 
        if(!err){
            const response =  mailconfig.sendMail({
                from: '"Afiliacion en linea" <no-reply@gmail.com>',
                to: "desarrollo@agenciamanager.com",
                subject: "Afiliacion en linea✔",
                html: bodyEmail
            }).catch(console.error)
        
            if(response){
                res.status(200).send({
                    error: false,
                    message: "Mensaje enviado correctamente"
                })
            }
        }else{
            throw err;
        }
    })

    
})


module.exports = router