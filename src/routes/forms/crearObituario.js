const { Router } = require('express')
const cors = require('cors')
const router = Router()
const mysqlConnection = require('../../config/mysql')
const _ = require('underscore')

router.post('/crearObituario', cors(), async(req, res)=>{
    // const response
    // const data = req.body;
    const {
        Visualizacion,
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
        FechaSalidaSala,
        HoraSalidaSala,
        Departamento,
        LugarExequias, 
        foto,
        DestinoFinal,
        HoraInhumacion,
        Ciudad,
        Sector,
        Ubicacion,
        NRegistro,
        FechaExhumacion,
        fechaRegistro
    }=req.body;
    
    const query = `INSERT INTO obituarios(Visualizacion, NDocumento, nombre1, nombre2, apellido1, apellido2, fechaNacimiento, fechaFallecimiento, LugarFallecimiento, Notaria, NombreSala, FechaSalidaSala, fechaExequias, HoraExequias, Departamento, LugarExequias,foto, DestinoFinal, HoraInhumacion, Ciudad, Sector, Ubicacion, NRegistro, FechaExhumacion, fechaRegistro,HoraSalidaSala) SELECT '${Visualizacion}', '${NDocumento}', '${nombre1}', '${nombre2}', '${apellido1}', '${apellido2}', '${fechaNacimiento}', '${fechaFallecimiento}', '${LugarFallecimiento}', '${Notaria}','${NombreSala}','${FechaSalidaSala}', '${fechaExequias}', '${HoraExequias}','${Departamento}', '${LugarExequias}','${foto}','${DestinoFinal}', '${HoraInhumacion}', '${Ciudad}', '${Sector}', '${Ubicacion}', '${NRegistro}', '${FechaExhumacion}','${fechaRegistro}','${HoraSalidaSala}' FROM DUAL WHERE NOT EXISTS (SELECT NDocumento FROM obituarios WHERE NDocumento = '${NDocumento}')`
    
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