
function guardaBusquedaJSON(){

    const dataConsulta = { marca: marcaAuto.value,
                        consulta: operacion.value
                    }
    
    let str = JSON.stringify(dataConsulta)
    localStorage.setItem("dataConsulta",str)
}


function mostrarUltimaBusquedaJSON(){

    if (localStorage.getItem("dataConsulta")){
        const dataConsulta = JSON.parse(localStorage.getItem("dataConsulta"))

        marcaAuto.value = dataConsulta.marca
        operacion.value = dataConsulta.consulta

        ultimasBusquedas.innerHTML = `<li>Calculaste el ${operacion.value} del ${marcaAuto.value}</li>`

    }

   

}

