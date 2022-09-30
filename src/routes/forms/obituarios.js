const { Router } = require('express')
const router = Router()
const cors = require('cors')
// const autorizarUsuario = require('../../../auth/auth')
const mysqlConnection = require('../../config/mysql')

router.post('/obituarios', cors(), async(req, res)=> {
    const {
        ciudad
    }=req.body
    // console.log(ciudad);v
    const query = `SELECT CONCAT(nombre1,' ',nombre2,' ',apellido1,' ',apellido2)nombreCompleto, DATE_FORMAT(HoraExequias, '%h:%i %p')HoraExequias,DATE_FORMAT(fechaExequias,'%m-%d-%Y')fechaExequias, DATE_FORMAT(fechaFallecimiento,'%m-%d-%Y')fechaFallecimiento,DATE_FORMAT(HoraSalidaSala, '%h:%m:%s')HoraSalidaSala, DATE_FORMAT(FechaSalidaSala, '%d/%m/%Y')FechaSalidaSala,  NombreSala, LugarExequias,foto, DestinoFinal,fechaRegistro, visualizarObituario, visualizarFoto FROM obituarios WHERE visualizarObituario = 0 AND Visualizacion = '${ciudad}' AND fechaRegistro >= DATE_ADD(NOW(), INTERVAL -1 DAY) ORDER BY id_obituario DESC`
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