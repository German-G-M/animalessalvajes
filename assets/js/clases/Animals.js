// aqui creamos la superclase "Animales"

class Animales{
    constructor(nombre,edad,imagen,comentarios,sonido){
        //encapsulamos los atributos
        let Nombre=nombre
        let Edad=edad
        let Imagen=imagen
        let Comentarios=comentarios
        let Sonido=sonido

        this.getNombre=()=>Nombre
        this.getEdad=()=>Edad
        this.getImagen=()=>Imagen
        this.getComentario=()=>Comentarios
        this.getSonido=()=>Sonido
    }
    //cremos los metodos
    get Nombre(){
        return this.getNombre()
    }
    get Edad(){
        return this.getEdad()
    }
    get Imagen(){
        return this.getImagen()
    }
    get Comentario(){
        return this.getComentario()
    }
    set Comentario(nuevocomentario){
        return this.getComentario(nuevocomentario)
    }
    get Sonido(){
        return this.getSonido()
    }
}
//probamos que funcione
const A1=new Animales("gaviota","0-5","img.png","ningun comentario","sonido gaviota")
console.log(A1)

//exportamos la clase Animales (se ira al archivo donde estarán las 5 subclases)
export default Animales