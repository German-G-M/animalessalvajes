//aqui veremos las imagenes

//importamos el objeto "Animales" que contiene todos los datos del archivo json
import Animales from "./consulta.js";

//escuchamos la opción select para mostrar la imagen del animal
let seleccion = document.getElementById("animal") //rescatamos el elemento <select> animal seleccionado
seleccion.addEventListener('change', async (evento) => {
    const a = evento.target.value//rescatamos el animal seleccionado
    //console.log(a)
    const { animales } = await Animales.getData()
    //console.log(animales)

    //ahora que tengo el nombre seleccionado, busco la imagen en el objeto y lo muestro en el div "preview"
    const imagenSeleccionada = animales.find(p => p.name == a)
    //console.log(imagenSeleccionada)//me trae el objeto seleccionado
    //console.log(imagenSeleccionada.imagen)//me trae la url de la imagen

    preview.style.backgroundImage = `url(./assets/imgs/${imagenSeleccionada.imagen})`//añado la url a mi backgroundImage
})


