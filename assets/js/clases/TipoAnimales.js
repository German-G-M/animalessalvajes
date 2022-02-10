//importamos la clase "Animales"
import Animales from "./Animals.js";

//creamos las subclases: Leon,Lobo,Oso,Serpiente,Aguila

class Leon extends Animales{
    constructor(nombre,edad,imagen,comentarios,sonido){
        super(nombre,edad,imagen,comentarios,sonido)//activamos el metodo super para heredar los atributos
    }
    //metodos
    Rugir(){
        console.log("el leon ruge")
        alert("el leon ruge")

    }
}
class Lobo extends Animales{
    constructor(nombre,edad,imagen,comentarios,sonido){
        super(nombre,edad,imagen,comentarios,sonido)//activamos el metodo super para heredar los atributos
    }
    //metodos
    Aullar(){
          console.log("el lobo aulla")
          alert("el lobo aulla")
    }
}
class Oso extends Animales{
    constructor(nombre,edad,imagen,comentarios,sonido){
        super(nombre,edad,imagen,comentarios,sonido)//activamos el metodo super para heredar los atributos
    }
    //metodos
    Gruñir(){
          console.log("el oso Gruñe")
          alert("el oso Gruñe")
    }
}
class Serpiente extends Animales{
    constructor(nombre,edad,imagen,comentarios,sonido){
        super(nombre,edad,imagen,comentarios,sonido)//activamos el metodo super para heredar los atributos
    }
    //metodos
    Sisear(){
          console.log("la serpiente sisea")
          alert("la serpiente sisea")
    }
}
class Aguila extends Animales{
    constructor(nombre,edad,imagen,comentarios,sonido){
        super(nombre,edad,imagen,comentarios,sonido)//activamos el metodo super para heredar los atributos
    }
    //metodos
    Chillar(){
          console.log("El aguila Chilla")
          alert("El aguila Chilla")
    }
}
//probamos que funcione
const L1=new Aguila("Aguila","0-5","aguila.png","ningun comentario","sonido de aguila")
console.log(L1)

//exportamos las subclases dentro de un objeto (esto se va a un index.js)
export {Leon,Lobo,Oso,Serpiente,Aguila}