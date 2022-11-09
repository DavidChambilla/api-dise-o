'use strict'

const { append } = require('express/lib/response');
//requires
var mongoose = require('mongoose');
var app = require('./app');


//puerto servidor
var port = process.env.port || 3999;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://pruebas123:pruebas123@cluster0.0z5fmvw.mongodb.net/?retryWrites=true&w=majority'
                ,{ useNewUrlParser: true })
                .then(
                    ()=>{
                        console.log('La conexion a la bd es correcta')
                        //crear el servidor
                        app.listen(port,() =>{
                            console.log('El servidor http://localhost:3999 esta funcionando.')
                        });
                    }
                )
                .catch(error => console.log(error));