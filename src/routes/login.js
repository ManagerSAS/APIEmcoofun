const { Router } = require('express')
const router = Router()
const mysqlConnection = require('../config/mysql')
const jwt = require('jsonwebtoken')

router.post('/login', (req, res) => {
    console.log(req.body)
    const { usuario, clave } = req.body
    mysqlConnection.query(`SELECT * FROM usuarios WHERE usuario = '${usuario}'  AND clave = MD5('${clave}')`, (err, rows, fields) => {
        
        if(!err){
            if(rows.length == 0){
                res.status(200).json({
                    token: null,
                    message: "Usuario Invalido"
                    
                })    
            }else{

                const { id = rows[0].id_usuario , usuario = rows[0].usuario } = rows

                const opt = {
                    expiresIn: '24h'
                }
                const tokensecret = process.env.TOKEN
                const token = jwt.sign({ id, usuario }, tokensecret, opt)

                res.status(200).json({token})
            }
        }else{
            res.status(200).json({
                error: true,
                message: 'Datos invalidos'
            })
        }        
    })    
})

module.exports = router