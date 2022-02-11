//importamos la clase "Animales"
import Animales from "./Animals.js";
const audioPlayer=document.getElementById("player");//obtenemos la etiqueta <audio> del html
//creamos las subclases: Leon,Lobo,Oso,Serpiente,Aguila

class Leon extends Animales{
    constructor(nombre,edad,imagen,comentarios,sonido){
        super(nombre,edad,imagen,comentarios,sonido)//activamos el metodo super para heredar los atributos
    }
    //metodos
    Rugir(){//para llamar al sonido
        //console.log(this.getSonido());
        audioPlayer.src=`./assets/sounds/${this.getSonido()}`;//en <udio> ponemos un "src"
        audioPlayer.play();//ejecutamos el metodo propio play()
    }
}
class Lobo extends Animales{
    constructor(nombre,edad,imagen,comentarios,sonido){
        super(nombre,edad,imagen,comentarios,sonido)//activamos el metodo super para heredar los atributos
    }
    //metodos
    Aullar(){
          //console.log("el lobo aulla");alert("el lobo aulla")
          audioPlayer.src=`./assets/sounds/${this.getSonido()}`
          audioPlayer.play()
    }
}
class Oso extends Animales{
    constructor(nombre,edad,imagen,comentarios,sonido){
        super(nombre,edad,imagen,comentarios,sonido)//activamos el metodo super para heredar los atributos
    }
    //metodos
    Gruñir(){
        audioPlayer.src=`./assets/sounds/${this.getSonido()}`
        audioPlayer.play()
    }
}
class Serpiente extends Animales{
    constructor(nombre,edad,imagen,comentarios,sonido){
        super(nombre,edad,imagen,comentarios,sonido)//activamos el metodo super para heredar los atributos
    }
    //metodos
    Sisear(){
        audioPlayer.src=`./assets/sounds/${this.getSonido()}`
        audioPlayer.play()
    }
}
class Aguila extends Animales{
    constructor(nombre,edad,imagen,comentarios,sonido){
        super(nombre,edad,imagen,comentarios,sonido)//activamos el metodo super para heredar los atributos
    }
    //metodos
    Chillar(){
        audioPlayer.src=`./assets/sounds/${this.getSonido()}`
        audioPlayer.play()
    }
}
//probamos que funcione
const L1=new Aguila("Aguila","0-5","aguila.png","ningun comentario","sonido de aguila")
console.log(L1)

//exportamos las subclases dentro de un objeto (esto se va a un index.js)
export {Leon,Lobo,Oso,Serpiente,Aguila}