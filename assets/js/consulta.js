//para acceder de manera asincrona al archivo JSON

let Animales=(()=>{
    const url="http://127.0.0.1:5501/animales.json" //dirección del archivo json
    const getData=async()=>{
        const res = await fetch(url)
        const data = await res.json()
        return data
    }
    return {getData}//retornamos dentro de un objeto el "getData"
})()
export default Animales //exportamos la variable "animales" que es un objeto
                        //que contiene los datos de "animales.json"