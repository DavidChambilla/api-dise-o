var datosquejas = JSON.parse(localStorage.getItem("DataCuchameMovistar"))

//Registro
const Rg_Motivo = document.getElementById("txtMotivo")
const Rg_Fecha = document.getElementById("fecha")
const Rg_Queja = document.getElementById("txtQueja")


//---------------FUNCIONE DE REDIRECCION------------------//
function Redirecionar(){
    if(datosquejas == null){
        alert('Usted debe iniciar session para ingrezar a esta seccion')
        window.location.replace("MenuUsuario.html")
    }else{
        if(!datosquejas.UserActivo){
            alert('Usted debe iniciar session para ingrezar a esta seccion')
            window.location.replace("MenuUsuario.html")
        }
    }    
}

window.onload = Redirecionar()



//-------------------------FUNCIONALIDAD DEL REGISTRO-------------------------//

function Registrar(){
    if(datosquejas.ListaQuejas == null){      
        datosquejas.ListaQuejas = []           
    }
    datosquejas.ListaQuejas.push({
        "Nombre": datosquejas.UserActivo.Nombre,
        "DNI": datosquejas.UserActivo.DNI,        
        "Motivo" : Rg_Motivo.value,
        "fecha": Rg_Fecha.value,
        "Quejas": Rg_Queja.value,                
    })
    localStorage.setItem('DataCuchameMovistar', JSON.stringify(datosquejas))
    Rg_Motivo.value = 'Seleccione un motivo'
    Rg_Fecha.value = ''
    Rg_Queja.value = ''
    alert("Su queja fue registrada con exito")
}

document.getElementById("regist-queja").addEventListener('submit', (e)=>{
    e.preventDefault()
    Registrar()
})