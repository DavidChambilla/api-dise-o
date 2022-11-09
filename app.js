'use strict'

//requires
var express = require('express');
var bodyParser = require('body-parser');

//usando express
var app = express();

//carga de archivo de rutas

//middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json)

//configuracion de cabeceras y cors
app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With,Content-Type, Accept, Access-Control-Allow-Request-Method');
    req.headers('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow','GET, POST, OPTIONS, PUT, DELETE')
});

//reescribir rutas

app.use(require("./routes/RT_queja"))
app.use(require("./routes/RT_usuarios"))

//exportar modulo
module.exports = app;