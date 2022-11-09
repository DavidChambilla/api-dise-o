var Database = JSON.parse(localStorage.getItem("DataCuchameMovistar"))

//Login=  creando las variables para los inputs
const Lg_User = document.getElementById("username")
const Lg_Password = document.getElementById("password")

//---------------FUNCIONE DE REDIRECCION------------------//
function Redirecionar(){
    if(Database != null){
        if(Database.UserActivo){
            window.location.replace("MenuUsuario.html")
        }
    }
}

window.onload = Redirecionar()


//-------------------------FUNCIONALIDAD DEL LOGIN-------------------------//
function login(){   
   if(Database == null){ ///en caso de que database devuelva nulo y no exista la db
        alert('Aun no se a registrado ninguna cuenta') //alerta

   }else{ //en caso de que si haya una cuenta        
        var Validar = Database.Usuarios.filter(user=> user.Usuario == Lg_User.value && user.Contraseña == Lg_Password.value)        
        if(Validar.length == 0){
            alert("Coloco un dato incorrecto en el login")            
        }else{            
            Database.UserActivo = Validar[0]
            localStorage.setItem('DataCuchameMovistar', JSON.stringify(Database))
            window.location.replace("MenuUsuario.html")
        }
    } 
}

document.getElementById("Form_Login").addEventListener('submit', (a)=>{
    a.preventDefault()
    login()
})