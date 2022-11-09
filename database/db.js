const {MongoClient} = require("mongodb");
const { response } = require("../app");
const client = new MongoClient("mongodb+srv://pruebas123:pruebas123@cluster0.0z5fmvw.mongodb.net/?retryWrites=true&w=majority");

client.connect().then(
    (response) => {
        console.log('La conexión a la bd es correcta - url:' + response.url);
    },
    (error) => {
        console.log('error:'+ error)
    }
)