const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const config = require('./config')
const app = express()


const apiRoutes = require('./routes/index')

//rutas del api
app.use('/api', apiRoutes)

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


mongoose.connect( //database seteada con nombre "shop", sin usuario ni clave
  config.db, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}, (err, res) => {
    //conexion base de datos ~ primero verificamos la conexion antes de montar el app
        if (err) {
        console.log('Base de datos no conectada');
        } else {
            app.listen(config.port, () => {
                //conexión correcta
                console.log('Base de datos conectada')
                console.log(`API REST corriendo en http://localhost:${config.port}`)
            })
        }
  }
)