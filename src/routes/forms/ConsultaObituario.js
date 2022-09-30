const { Router } = require('express')
const router = Router()
const cors = require('cors')
// const autorizarUsuario = require('../../../auth/auth')
const mysqlConnection = require('../../config/mysql')

router.post('/ConsultaObituario', cors(), async(req, res)=> {
    const {
        datos
    }=req.body
    // console.log(ciudad);
    const query = `SELECT id_obituario, Visualizacion, IF(visualizarObituario=0, "false", "true")visualizarObituario, nombre1, nombre2, apellido1, apellido2, NDocumento, DATE_FORMAT(fechaNacimiento, '%d/%m/%Y')fechaNacimiento, DATE_FORMAT(fechaFallecimiento,'%d/%m/%Y')fechaFallecimiento, LugarFallecimiento, Notaria, NombreSala, DATE_FORMAT(fechaExequias, '%d/%m/%Y')fechaExequias,  DATE_FORMAT(HoraExequias, '%h:%m:%s')HoraExequias, DATE_FORMAT(HoraSalidaSala, '%h:%m:%s')HoraSalidaSala, DATE_FORMAT(FechaSalidaSala, '%d/%m/%Y')FechaSalidaSala,Departamento, LugarExequias,foto, IF(visualizarFoto=0, "false", "true")visualizarFoto, DestinoFinal, DATE_FORMAT(HoraInhumacion, '%h:%m:%s')HoraInhumacion, Ciudad, Sector, Ubicacion, NRegistro, DATE_FORMAT(FechaExhumacion, '%d/%m/%Y')FechaExhumacion FROM obituarios 
        WHERE NDocumento LIKE '%${datos}%'
        OR nombre1 LIKE '%${datos}%' 
        OR nombre2 LIKE '%${datos}%'
        OR apellido1 LIKE '%${datos}%' 
        OR apellido2 LIKE '%${datos}%'
        OR CONCAT(nombre1,' ',nombre2,' ',apellido1,' ',apellido2) LIKE '%${datos}%'`
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