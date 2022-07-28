const nombres = ['Bad Bunny', 'Duki', 'Travis Scott']

function Canciones(cancion, artista, album, duracion) {
    this.cancion = cancion
    this.artista = artista
    this.album = album
    this.duracion = duracion
}

const cancion1 = new canciones('Un coco', 'Bad Bunny', 'Un verano sin ti', '3:17') 
const cancion2 = new canciones('TOP 5', 'Duki', 'Temporada de Reaggeton', '2:27') 
const cancion3 = new canciones('Coffee Bean', 'Travis Scott', 'ASTROWORLD', '3:30')

nombres.push(cancion1)
nombres.push(cancion2)
nombres.push(cancion3)

console.log(nombres)

let cancion = []

for(let i=0; i < nombres.length; i++){
    console.log(typeof(nombres[i]))
    if(typeof(nombres[i]) == 'object' ){
        cancion.push(nombres[i])
    }
}

for(canciones of cancion){
    console.log(`Tu artista es ${canciones.artista} y su cancion es ${canciones.cancion} que dura ${canciones.duracion} minutos`) 
}




