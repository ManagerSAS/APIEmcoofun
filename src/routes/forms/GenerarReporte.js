const { Router } = require('express')
const router = Router()
const cors = require('cors')
// const autorizarUsuario = require('../../../auth/auth')
const mysqlConnection = require('../../config/mysql')

router.post('/GenerarReporte', cors(), async(req, res)=> {
    const {
        fechaInicio,
        FechaFin
    }=req.body
    // console.log(ciudad);
    const query = `SELECT * FROM homenajes WHERE fecha_registro
    BETWEEN STR_TO_DATE('${fechaInicio}', '%Y-%m-%d') AND STR_TO_DATE('${FechaFin}', '%Y-%m-%d')`
    mysqlConnection.query(query, (err, results) => { 
        if(!err){
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