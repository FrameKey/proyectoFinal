
let marcaAuto = document.querySelector("#autoSelection")    
let operacion = document.querySelector("#operacionSelection")    
let formulario = document.querySelector("#formulario")
let btnSubmit = document.querySelector("#submit")
let mensaje = document.querySelector("#mensaje")
let ultimasBusquedas = document.querySelector("#ultimasBusquedas")
let verMas = document.querySelector("#verMas")







btnSubmit.addEventListener("click", (e)=> {
    e.preventDefault()
   
    fetch("js/data.json")
    .then((response)=> response.json())
    .then((data)=> { 
       
       
                
                if (data.find( p => p.marca.toLocaleLowerCase() === marcaAuto.value.toLocaleLowerCase()) && operacion.value.toLocaleLowerCase() == "seguro"){
                    let resultado = data.find( p => p.marca.toLocaleLowerCase() === marcaAuto.value.toLocaleLowerCase())
                    let seguro = parseInt(resultado.precio - (resultado.año * 3))
                    
                    Swal.fire({
                     title: resultado.marca +" "+ resultado.modelo,
                     text: "El seguro sale $" + seguro + " por mes.",
                     icon: 'success',
                     color:"#100423",
                     iconColor:"#32424",
                     confirmButtonColor: "#fa0050",
                     confirmButtonText: 'Aceptar',
                     background:"#fff"
                      })
            
                    guardaBusquedaJSON()
                 } else if
                    (data.find( p => p.marca.toLocaleLowerCase() === marcaAuto.value.toLocaleLowerCase()) && operacion.value.toLocaleLowerCase() == "precio final"){
                    let resultado = data.find( p => p.marca.toLocaleLowerCase() === marcaAuto.value.toLocaleLowerCase())
                    let precioFinal = parseInt(resultado.precio * resultado.iva)
            
                    Swal.fire({
                      title: resultado.marca +" "+ resultado.modelo,
                      text: "El precio final es de $" + precioFinal + " (IVA incluido)",
                      icon: 'success',
                      color:"#100423",
                      iconColor:"#32424",
                      confirmButtonColor: "#fa0050",
                      confirmButtonText: 'Aceptar',
                      background:"#fff"
                       })
            
            
                    guardaBusquedaJSON()
               
                    } 
                    else if
                    ( marcaAuto.value.toLocaleLowerCase() === "" || operacion.value.toLocaleLowerCase() == ""){
                   mensaje.innerHTML = "<h2>⚠️ Recuerda completar todos los campos</h2>"
                    } 
                    else {
                       mensajeFinal()
                            }
            
                        })          
    
  })
  
  verMas.addEventListener("click", ()=> {
    mostrarUltimaBusquedaJSON()      
})


function mensajeFinal(){

Swal.fire({
  title: 'Sorry 😔',
  text: 'No tenemos ese auto',
  icon: 'error',
  color:"#100423",
  iconColor:"#32424",
  confirmButtonColor: "#fa0050",
  confirmButtonText: 'Aceptar',
  background:"#fff"
   })

}
