const { Router } = require('express')
const router = Router()
const cors = require('cors')
// const autorizarUsuario = require('../../../auth/auth')
const mysqlConnection = require('../../config/mysql')

router.post('/ConsultarEvent', cors(), async(req, res)=> {
    
    const query = `SELECT id_evento, NombreEvento,LugarEvento, DATE_FORMAT(fechaEvento, '%d/%m/%Y')fechaEvento, HoraEvento,DescripcionEvento,Pieza
    FROM Eventos WHERE DAY(fechaEvento) >= DAY(CURRENT_DATE())  ORDER BY fechaEvento`
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