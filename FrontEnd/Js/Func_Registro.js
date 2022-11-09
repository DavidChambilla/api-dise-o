//nombre a llamar del localstorage
var Database = JSON.parse(localStorage.getItem("DataCuchameMovistar"))

//Registro, constantes- enlazadas con los inputs del form login
const Rg_Usuario = document.getElementById("txtUser")
const Rg_Nombre = document.getElementById("txtNombre")
const Rg_Apellido = document.getElementById("txtApellidos")
const Rg_DNI = document.getElementById("txtDNI")
const Rg_Correo = document.getElementById("txtCorreo")
const Rg_Contraseña = document.getElementById("txtPassword")

//---------------FUNCIONE DE REDIRECCION------------------//
function Redirecionar(){
    if(Database != null){
        if(Database.UserActivo){
            window.location.replace("MenuUsuario.html")
        }
    }
}

window.onload = Redirecionar()


//-------------------------FUNCIONALIDAD DEL REGISTRO 20.?-------------------------//

function Registrar(){ //funcion registrar
    //condicional
    if(Database == null){ //en caso de que no exista el localstorage(userMovistar), ejecute lo de debajo        
        Database = {
            Usuarios: []
        } //el database tenga un array vacío, nuevos datos
    }
    //en caso de que si exista el localstorage => ingresando los nuevos elementos

    Database.Usuarios.push({ //valores a almacenar en el localstorage(creando variable)
        "Usuario": Rg_Usuario.value, //para que obtenga el resultado
        "Nombre":  Rg_Nombre.value,
        "Apellido": Rg_Apellido.value,
        "DNI": Rg_DNI.value,
        "Correo": Rg_Correo.value,
        "Contraseña": Rg_Contraseña.value,
        "Rol": "Usuario"
    })
    //localstorage, colocando el nomb del localstorage=(usermovistar), y lo que se 
    //ingresa al localstorage, json.stringify => transforma un json a texto
    
    localStorage.setItem('DataCuchameMovistar', JSON.stringify(Database)) 
    //reseteamos para los inputs de registro => vacíos
    Rg_Usuario.value = '' //texto vacío, al resetear no tenga ningun valor el input
    Rg_Nombre.value = ''
    Rg_Apellido.value = ''
    Rg_DNI.value = ''
    Rg_Correo.value = ''
    Rg_Contraseña.value = ''
    alert("Su cuenta fue creada con exito") //alerta
}


document.getElementById("Registro").addEventListener('submit', (e)=>{ //llamando al id del form, .añade un evento
    //al dar el registrar, envía los datos y actualizar la página(evento submit)
    //_antes de que envíe el formulario: 
    e.preventDefault() //no se actualice la pag
    Registrar() //ejecute el cod de registrar
})