var contenerdor = document.getElementById("ctn_quejas")
var datosQuejas = JSON.parse(localStorage.getItem('DataCuchameMovistar'))


function mostrarQuejas(){
    if(datosQuejas != null){
        console.log(datosQuejas)
        if(datosQuejas.ListaQuejas != null){
            var Queja = ""
            datosQuejas.ListaQuejas.forEach((e) => {
                Queja += `
                <div class="col-sm-6 mt-5">
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Nombre: ${e.Nombre} ------------- Dni: ${e.DNI}</h5>
                    <h6 style="padding-top:25px">Queja:</h6>
                    <p class="card-text" style="padding-bottom:25px">${e.Quejas}</p>
                    <h6 style="padding-top:25px">Fecha de Solicitud:</h6>
                    <p class="card-text" style="padding-bottom:25px">${e.fecha}</p>              
                    </div>
                </div>
                </div>
                `
            })     
            console.log(Queja)       
            contenerdor.innerHTML = Queja            
        }else{
            alert(1)
            alert('No tiene ninguna queja almacenada')
        }        
    }else{
        alert(2)
        alert('No tiene ninguna queja almacenada')
    }
}

window.onload = mostrarQuejas()

