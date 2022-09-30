const { Router } = require('express')
const router = Router()
const cors = require('cors')
// const autorizarUsuario = require('../../../auth/auth')
const mysqlConnection = require('../../config/mysql')

router.post('/EditHomenaje', cors(), async(req, res)=> {
    const {
        id_homenaje,
        nombre_titular,
        direccion,
        barrio,
        municipio,
        telefono,
        email,
        nombre_homenaje,
        n_documento,
        afiliado,
        lugar_fallecimiento,
        documentos,
        exequias,
        otro,
        iglesia,
        hora_exequias,
        retablo,
        palabras,
        destino_final,
        parentescos
    }=req.body

    const query = `UPDATE homenajes SET nombre_titular= '${nombre_titular}',  direccion='${direccion}',  barrio='${barrio}',  municipio='${municipio}',  telefono='${telefono}',  email='${email}',  nombre_homenaje='${nombre_homenaje}',  n_documento='${n_documento}', afiliado='${afiliado}', lugar_fallecimiento='${lugar_fallecimiento}',  documentos='${documentos}',  exequias='${exequias}',  otro='${otro}',  iglesia='${iglesia}',  hora_exequias='${hora_exequias}', retablo='${retablo}', palabras='${palabras}',  destino_final='${destino_final}', parentescos='${parentescos}'  WHERE id_homenaje = '${id_homenaje}'`

    mysqlConnection.query(query, (err, results) => { 
        if(!err){
            let i=0
            res.status(200).json({
                error: false,
                results: results
            })
        }else{
            throw err;
        }
    })
})


module.exports = router