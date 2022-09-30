const { Router } = require('express')
const router = Router()
const autorizarUsuario = require('../../../auth/auth')
const mysqlConnection = require('../../../config/mysql')

router.get('/homenajes1', autorizarUsuario, (req, res) => {
    mysqlConnection.query('SELECT * FROM homenajes ORDER BY aprobado ASC', (err, rows, fields) => {
        if(!err){
            res.status(200).json(rows)
        }else{
            throw err;
        }
    })
})

module.exports = router