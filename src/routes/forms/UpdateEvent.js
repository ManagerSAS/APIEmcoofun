const { Router } = require('express')
const router = Router()
const cors = require('cors')
// const autorizarUsuario = require('../../../auth/auth')
const mysqlConnection = require('../../config/mysql')

router.post('/UpdateEvent', cors(), async(req, res)=> {
    const {
        id_evento,
        NombreEvento,
        LugarEvento,
        fechaEvento,
        HoraEvento,
        DescripcionEvento,
        Pieza,
    }=req.body

    const query = `UPDATE Eventos SET NombreEvento= '${NombreEvento}',  LugarEvento='${LugarEvento}',  fechaEvento=STR_TO_DATE('${fechaEvento}', '%Y-%m-%d'),  HoraEvento='${HoraEvento}',  DescripcionEvento='${DescripcionEvento}',  Pieza='${Pieza}'  WHERE id_evento = '${id_evento}'`

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