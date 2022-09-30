const { Router } = require('express')
const cors = require('cors')
const router = Router()
const mysqlConnection = require('../../config/mysql')
const _ = require('underscore')

router.post('/CreateNew', cors(), async(req, res)=>{
    // const response
    // const data = req.body;
    const {
        NombreEvento,
        LugarEvento,
        fechaEvento,
        HoraEvento,
        DescripcionEvento,
        Pieza,
        Fecha_Registro
    }=req.body;
    
    const query = `INSERT INTO Eventos(NombreEvento, LugarEvento, fechaEvento, HoraEvento, DescripcionEvento, Pieza, Fecha_Registro) 
        VALUES('${NombreEvento}', '${LugarEvento}', '${fechaEvento}', '${HoraEvento}', '${DescripcionEvento}', '${Pieza}', '${Fecha_Registro}')`
    
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