const { Router } = require('express')
const router = Router()
const cors = require('cors')
// const autorizarUsuario = require('../../../auth/auth')
const mysqlConnection = require('../../config/mysql')

router.post('/GenerarReporteObituario', cors(), async(req, res)=> {
    const {
        ciudad,
        fechaInicio,
        fechafin
    }=req.body
    // console.log(ciudad);
    const query = `SELECT * FROM obituarios WHERE Visualizacion = '${ciudad}' AND fechaRegistro
    BETWEEN '${fechaInicio}' AND '${fechafin}'`
    mysqlConnection.query(query, (err, results) => { 
        if(!err){
            if(results.length >= 1){
                res.status(200).json({
                    error: false,
                    results: results
                })
            }else{
                res.status(200).json({
                    error: false,
                    results: results
                })
            }
        }else{
            throw err;
        }
    })
})


module.exports = router