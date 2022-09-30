const { Router } = require('express')
const router = Router()
const cors = require('cors')
// const autorizarUsuario = require('../../../auth/auth')
const mysqlConnection = require('../../config/mysql')

router.post('/UpdateObituario', cors(), async(req, res)=> {
    const {
        id_obituario,
        visualizacion,
        NDocumento, 
        nombre1, 
        nombre2, 
        apellido1, 
        apellido2, 
        fechaNacimiento, 
        fechaFallecimiento, 
        LugarFallecimiento, 
        Notaria, 
        NombreSala, 
        fechaExequias, 
        HoraExequias, 
        HoraSalidaSala,
        FechaSalidaSala,
        Departamento, 
        LugarExequias, 
        DestinoFinal, 
        HoraInhumacion, 
        Ciudad, 
        Sector, 
        Ubicacion, 
        NRegistro, 
        FechaExhumacion,
    }=req.body
    // console.log(ciudad);
    const query = `UPDATE obituarios SET Visualizacion= '${visualizacion}',  NDocumento='${NDocumento}',  nombre1='${nombre1}',  nombre2='${nombre2}',  apellido1='${apellido1}',  apellido2='${apellido2}',  fechaNacimiento=STR_TO_DATE('${fechaNacimiento}', '%Y/%m/%d'),  fechaFallecimiento=STR_TO_DATE('${fechaFallecimiento}','%Y/%m/%d'), LugarFallecimiento='${LugarFallecimiento}', Notaria='${Notaria}',  NombreSala='${NombreSala}',  FechaSalidaSala=STR_TO_DATE('${FechaSalidaSala}','%Y/%m/%d'),  fechaExequias=STR_TO_DATE('${fechaExequias}', '%Y/%m/%d'),  HoraExequias='${HoraExequias}',  Departamento='${Departamento}', LugarExequias='${LugarExequias}', DestinoFinal='${DestinoFinal}',  HoraInhumacion='${HoraInhumacion}', Ciudad='${Ciudad}',  Sector='${Sector}',  Ubicacion='${Ubicacion}',  NRegistro='${NRegistro}',  FechaExhumacion=STR_TO_DATE('${FechaExhumacion}', '%Y/%m/%d'), HoraSalidaSala ='${HoraSalidaSala}' WHERE id_obituario = '${id_obituario}'`
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