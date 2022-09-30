const { Router } = require('express')
const cors = require('cors')
const router = Router()
const mysqlConnection = require('../../config/mysql')
const _ = require('underscore')

router.post('/homenajes', cors(), async(req, res)=>{
    const {
        nameTitular,
        Departamento,
        Ciudad,
        typesId,
        Barrio,
        numeroId,
        direccion,
        email,
        telefono1,
        telefono2,
        nameHomenaje,
        NumdocumentoHome,
        typeIdHomenaje,
        afiliaty,
        DepartamentoFallecimiento,
        cityFallecimiento,
        documents,
        exequias,
        other,
        Templo1,
        DireccionTemplo1,
        Templo2,
        DireccionTemplo2,
        Fecha,
        Hora1,
        Hora2,
        palabras,
        file,
        fecha_registro,
    }=req.body;
    
    const query = `INSERT INTO homenajes( nameTitular, Departamento, Ciudad, typesId,Barrio, numeroId, direccion, email, telefono1, telefono2, nameHomenaje, NumdocumentoHome, typeIdHomenaje, afiliaty, DepartamentoFallecimiento, cityFallecimiento, documents, exequias, other, Templo1, DireccionTemplo1, Templo2, DireccionTemplo2, Fecha, Hora1, Hora2, palabras, foto, fecha_registro) SELECT '${nameTitular}','${Departamento}','${Ciudad}','${typesId}','${Barrio}','${numeroId}','${direccion}','${email}','${telefono1}','${telefono2}','${nameHomenaje}','${NumdocumentoHome}',${typeIdHomenaje},'${afiliaty}','${DepartamentoFallecimiento}','${cityFallecimiento}','${documents}','${exequias}','${other}','${Templo1}','${DireccionTemplo1}','${Templo2}','${DireccionTemplo2}','${Fecha}','${Hora1}','${Hora2}','${palabras}','${file}','${fecha_registro}' FROM DUAL WHERE NOT EXISTS ( SELECT id_homenaje, nameTitular, numeroId, nameHomenaje, NumdocumentoHome FROM homenajes WHERE nameTitular = '${nameTitular}' AND numeroId = '${numeroId}' AND nameHomenaje = '${nameHomenaje}' AND NumdocumentoHome = '${NumdocumentoHome}')`
             
        mysqlConnection.query(query, (err, rows, fields) => {
            if(!err){
                res.status(200).json({
                    error: false,
                    query: 'Query correctly executed.',
                    message: 'Data correctly saved'
                })
            }else{
                throw err;
            }
        })
})

module.exports = router