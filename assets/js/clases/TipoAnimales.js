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

    }
}
class Lobo extends Animales{
    constructor(nombre,edad,imagen,comentarios,sonido){
        super(nombre,edad,imagen,comentarios,sonido)//activamos el metodo super para heredar los atributos
    }
    //metodos
    Aullar(){
          console.log("el lobo aulla")
    }
}
class Oso extends Animales{
    constructor(nombre,edad,imagen,comentarios,sonido){
        super(nombre,edad,imagen,comentarios,sonido)//activamos el metodo super para heredar los atributos
    }
    //metodos
    Gruñir(){
          console.log("el oso Gruñe")
    }
}
class Serpiente extends Animales{
    constructor(nombre,edad,imagen,comentarios,sonido){
        super(nombre,edad,imagen,comentarios,sonido)//activamos el metodo super para heredar los atributos
    }
    //metodos
    Sisear(){
          console.log("la serpiente sisea")
    }
}
class Aguila extends Animales{
    constructor(nombre,edad,imagen,comentarios,sonido){
        super(nombre,edad,imagen,comentarios,sonido)//activamos el metodo super para heredar los atributos
    }
    //metodos
    Chillar(){
          console.log("El aguila Chilla")
    }
}

//probamos que funcione
const L1=new Aguila("Aguila","0-5","aguila.png","ningun comentario",".....")
console.log(L1)