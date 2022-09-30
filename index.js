require('dotenv').config();
// console.log(process.env.TOKEN)
    
const express = require('express')
var cors = require('cors')
const app = express()

// settings
app.set('port', process.env.PORT || 3000)

// middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// auth
app.use('/api/v1', require('./src/routes/login'))

// routes
app.use('/api/v1/forms', require('./src/routes/forms/postFormAfiliacion'))
app.use('/api/v1/forms', require('./src/routes/forms/AfiliacionesOnLine'))
app.use('/api/v1/forms', require('./src/routes/forms/homenajes'))
app.use('/api/v1/forms', require('./src/routes/forms/envioDocNovedades'))
app.use('/api/v1/forms', require('./src/routes/forms/obituarios'))
app.use('/api/v1/forms', require('./src/routes/forms/ConsultaObituario'))
app.use('/api/v1/forms', require('./src/routes/forms/ConsultHomenaje'))
app.use('/api/v1/forms', require('./src/routes/forms/EditHomenaje'))
app.use('/api/v1/forms', require('./src/routes/forms/GenerarReporte'))
app.use('/api/v1/forms', require('./src/routes/forms/UpdateObituario'))
app.use('/api/v1/forms', require('./src/routes/forms/crearObituario'))
app.use('/api/v1/forms', require('./src/routes/forms/formContact'))
app.use('/api/v1/forms', require('./src/routes/forms/EnviarCorreoFacturaElectronica'))
app.use('/api/v1/forms', require('./src/routes/forms/RegistroDefuncion'))
app.use('/api/v1/forms', require('./src/routes/forms/CreateNew'))
app.use('/api/v1/forms', require('./src/routes/forms/UpdateEvent'))
app.use('/api/v1/forms', require('./src/routes/forms/ConsultarEvent'))
app.use('/api/v1/forms', require('./src/routes/forms/GenerarReporteObituario'))



// routes type get
app.use('/api/v1/get', require('./src/routes/get/homenajes/homenajes'))

app.listen(app.get('port'), () => {
    console.log(`Listening on port: ${app.get('port')}`)
})