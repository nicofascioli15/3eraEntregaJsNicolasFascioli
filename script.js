const propiedades = JSON.parse(localStorage.getItem("nuevaPropiedad")) || []
let idGenerador = 1

class propiedad {
    constructor(ubicacion, dormitorios, baños){
        this.idGenerador = idGenerador
        this.ubicacion = ubicacion
        this.dormitorios = dormitorios
        this.baños = baños

    }
}



const datosPropiedad = document.querySelector ("#datosPropiedad")

datosPropiedad.addEventListener("submit", (e)=>{
    e.preventDefault()
    const datos = e.target.children
    const nuevaPropiedad = new propiedad (datos["ubicacion"].value, datos["dormitorios"].value, datos["baños"].value)       
    idGenerador++
    propiedades.push(nuevaPropiedad)
    localStorage.setItem("propiedades", JSON.stringify(propiedades))
    datosPropiedad.reset()
    verPropiedad(nuevaPropiedad)
    
})



const verPropiedad = (nuevaPropiedad) =>{
    const tarjetaPropiedad = document.createElement("div")
    tarjetaPropiedad.className = "propiedad"
    tarjetaPropiedad.innerHTML = `<h3>${nuevaPropiedad.ubicacion}</h3>
                                    <p>Id: ${nuevaPropiedad.idGenerador}</p>
                                    <p>Dormitorios: ${nuevaPropiedad.dormitorios}</p>
                                    <p>Baños: ${nuevaPropiedad.baños}</p>
                                    <button>Editar</button>
                                    <button>Eliminar</button>`
    todasPropiedades.appendChild(tarjetaPropiedad)
    
}

// recorro el array de las propiedades y en cada vuelta le voy 
//agregando una propiedad

const todasPropiedades = document.querySelector("#todasPropiedades")
propiedades.forEach((propiedad) => {
    verPropiedad(propiedad)

})           

//Eliminar de la memoria todo lo que este agregado
const eliminarTodo = document.querySelector("#eliminarTodo")
eliminarTodo.addEventListener("click",()=>{
    localStorage.clear()
    location.reload()

})
