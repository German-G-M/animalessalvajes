import { Leon, Lobo, Oso, Serpiente, Aguila } from "./clases/TipoAnimales.js"
import Animales from "./consulta.js";//importamos el Objeto animales para acceder a los sonidos

//obtenemos los valores del formulario

let animalesRegistrados = []//array que me alnacenará los animales registrados

btnRegistrar.addEventListener("click", async () => {
    //rescatamos los valores del formulario usando los "id"
    let nombreAnimal = animal.value//
    let edadAnimal = edad.value//
    let comentariosAnimal = comentarios.value//
    let previewElement = preview//obtenemos el elemento con id "preview" donde están las imagenes
    console.log("preview elemet")
    console.log(previewElement)//me trae el "div" 

    let imagenSrcBg = previewElement.style.backgroundImage //obtenemos el background de la imagen
    console.log("background de la imagen")
    console.log(imagenSrcBg)//

    let imgSrc = imagenSrcBg.slice(5, imagenSrcBg.length - 2) //???no se que hace esto(solo se que me trae la url de la imagen)
    console.log(nombreAnimal)
    console.log(edadAnimal)
    console.log(comentariosAnimal)

    console.log("url de la imagen")
    console.log("url-->" + imgSrc)//ahora  me esta mostrando la url

    //traemos el objeto seleccionado para acceder al sonido

    const { animales } = await Animales.getData()
    console.log(animales)
    const imagenSeleccionada = animales.find(p => p.name == nombreAnimal)
    console.log(imagenSeleccionada)//me trae el objeto seleccionado
    console.log(imagenSeleccionada.sonido)
    const son=imagenSeleccionada.sonido
    
    //creamos las instancias para el registro dependiendo del tipo de animal
    let nuevoAnimalRegistrado
    //usamos un case
    switch (nombreAnimal) {
        case "Leon": nuevoAnimalRegistrado = new Leon(nombreAnimal, edadAnimal, imgSrc, comentariosAnimal, son); break;
        case "Lobo": nuevoAnimalRegistrado = new Lobo(nombreAnimal, edadAnimal, imgSrc, comentariosAnimal, son); break;
        case "Oso": nuevoAnimalRegistrado = new Oso(nombreAnimal, edadAnimal, imgSrc, comentariosAnimal, son); break;
        case "Serpiente": nuevoAnimalRegistrado = new Serpiente(nombreAnimal, edadAnimal, imgSrc, comentariosAnimal, son); break;
        case "Aguila": nuevoAnimalRegistrado = new Aguila(nombreAnimal, edadAnimal, imgSrc, comentariosAnimal, son); break;
    }
    //el nuevo registro lo añadimos a nuestro array animalesRegistrados
    animalesRegistrados.push(nuevoAnimalRegistrado);
    console.log(animalesRegistrados)

})
