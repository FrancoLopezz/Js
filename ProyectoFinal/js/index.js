//BIENVENIDA
const espacio = ' '

let nombre 

nombre = prompt('ingresa tu nombre')

let apellido

apellido = prompt('ingresa tu apellido')

console.log(nombre + espacio + apellido)

if(nombre != '' && apellido != '' && nombre != null && apellido != null){
    alert('Hola ' + nombre + espacio + apellido) 
}else if(nombre != '' && nombre != null){
    alert('Hola ' + nombre)
}else if(apellido != '' && apellido != null){
    alert('Hola ' + apellido)
}else{
    console.log(alert('usted no ha completado '))
}

//Gustos del usuario

let gustos = 0
let cantidadGustos = parseInt(prompt('selecione la cantidad de canciones que va a agregar a su selección'))

do{
    for(i=0; i <= cantidadGustos; i++){
        //gustos += cantidadGustos
        alert(`Usted agrego ${i} a su selección`) 
    }
} while (cantidadGustos != 0)


//CANCIONES

const nombres = ['Bad Bunny', 'Duki', 'Travis Scott']

function Canciones(cancion, artista, album, duracion) {
    this.cancion = cancion
    this.artista = artista
    this.album = album
    this.duracion = duracion
}



const cancion1 = new Canciones('Un coco', 'Bad Bunny', 'Un verano sin ti', '3:17') 
const cancion2 = new Canciones('TOP 5', 'Duki', 'Temporada de Reaggeton', '2:27') 
const cancion3 = new Canciones('Coffee Bean', 'Travis Scott', 'ASTROWORLD', '3:30')

const artista = new Canciones 

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

for(Canciones of cancion){
    console.log(`Tu artista es ${Canciones.artista} y la cancion que se reproduce es ${Canciones.cancion} que dura ${Canciones.duracion} minutos`) 
}




