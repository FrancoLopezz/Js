let verificacion = prompt('Ingrese las palabras que quiera ver en pantalla')

let cadena 

alert(verificacion)

do{
    cadena += verificacion

    showWords = prompt('Ingrese "No soy un robot" para continuar')
}while(showWords != 'No soy un robot')

console.log(cadena)

let Repeticiones = parseInt (prompt('ingrese la cantidad de veces que quiere repetir este numero'))

console.log(typeof(Repeticiones))

let valores = 0

for(i=0; i<Repeticiones; i++){
    alert(`Esta alerta se repitio ${i} cantidad de veces`)
} 

