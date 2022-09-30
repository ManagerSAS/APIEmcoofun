const { Router } = require('express')
const router = Router()
const cors = require('cors')
// const autorizarUsuario = require('../../../auth/auth')
const mysqlConnection = require('../../config/mysql')

router.post('/ConsultHomenaje', cors(), async(req, res)=> {
    const {
        datos
    }=req.body
    // console.log(ciudad);
    const query = `SELECT * FROM homenajes 
        WHERE nameTitular LIKE '%${datos}%'
        OR nameHomenaje LIKE '%${datos}%'`
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