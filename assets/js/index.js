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

    //si los datos estan completos procedemos a traer el sonido,instanciamos los objetos y hacemos el push
    if (nombreAnimal!="Seleccione un animal" && edadAnimal!="Seleccione un rango de años" && comentariosAnimal!="" && imgSrc) {

        //traemos el objeto seleccionado para acceder al sonido
        const { animales } = await Animales.getData()
        console.log(animales)
        const imagenSeleccionada = animales.find(p => p.name == nombreAnimal)
        console.log(imagenSeleccionada)//me trae el objeto seleccionado
        console.log(imagenSeleccionada.sonido)
        const son = imagenSeleccionada.sonido

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

        //aqui limpiamos nuestro formulario
        animal.selectedIndex=0//usamos el id de html
        edad.selectedIndex=0//usamos el id de html
        previewElement.style.backgroundImage='url(./assets/imgs/lion.svg)'
        comentarios.value=""//usamos el id del html
        //imagenSrcBg=previewElement.style.backgroundColor="#f0f0f0"
        reloadTable()
    }
    else {
        alert("faltan datos por llenar")
    }
})


//mostramos la tabla de todos los animales registrados
const reloadTable = () => {
    const animalesRegistradosTemplate = document.getElementById("Animales")//id en html
    animalesRegistradosTemplate.innerHTML = ""//limpiamos cada vez que agregamos un registro
    animalesRegistrados.forEach((elemento, indice) => {
        //por cada registro vamos a concatenar a participantes template
        animalesRegistradosTemplate.innerHTML += `
        <div class="px-2 pb-2 Tabla" data-fighter="${elemento.getNombre()}">
            <div class="card" style="width: 10rem;">
            <img src="${elemento.getImagen()}" class="card-img-top" alt="..."  height="150" data-toggle="modal" data-target="#exampleModal" onclick="mostrarDatos('${elemento.getNombre()}')" >
            <div class="card bg-secondary" style="height: 2rem;">
                <img src="./assets/imgs/audio.svg" height="30" width="150" onclick="playSonido('${elemento.getNombre()}')">
            </div>
            </div>
        </div>
        `;
        //mostrarDatos(elemento.getNombre())

    })
}


window.playSonido = (nombreAnimal) => {
    //encontramos nuestro animal
    const animal = animalesRegistrados.find((aa) => aa.getNombre() == nombreAnimal);
    console.log(animal);
    //comparamos el nombre del animal y llamamos al metodo donde emiten sonido
    nombreAnimal == "Leon" ? animal.Rugir():
    nombreAnimal == "Lobo" ? animal.Aullar():
    nombreAnimal == "Oso" ? animal.Gruñir():
    nombreAnimal == "Serpiente" ? animal.Sisear():
    nombreAnimal == "Aguila" ? animal.Chillar():undefined;
}

window.mostrarDatos=(nombreAnimal)=>{
    //encontrasmos nuestro animal
    const animal = animalesRegistrados.find((aa) => aa.getNombre() == nombreAnimal);
    console.log(animal.getNombre());
    console.log(animal.getEdad());
    console.log(animal.getComentario());
    let modal=document.getElementById("datoAnimal")
    modal.innerHTML=`
                <div class="card border-0" >
            <img src="${animal.getImagen()}" class="card-img-top" alt="...">
            <div class="card-body bg-dark text-center text-light">
                <p>${animal.getNombre()}</p>
                <p>${animal.getEdad()}</p>
                <p><b>Comentarios</b></p>
                <p class="card-text">${animal.getComentario()}</p>
            </div>
            </div>
    `
}