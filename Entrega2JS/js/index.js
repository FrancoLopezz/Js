function bienvenida(nombre, apodo, deporte, comidaFavorita, peliculaFavorita ){
    this.name = nombre 
    this.nickname = apodo
    this.sport = deporte
    this.favFood = comidaFavorita
    this.favMovie = peliculaFavorita
    this.presentacion = function(){
        let mensajePresentacion = `Hola bienvenidx ${this.name}, nos gusta tu apodo ${this.nickname}, por ahora sabemos que te gusta el ${this.sport}, que tu comida favorita es ${this.favFood} y tu pelicula favorita es ${this.favMovie}... Esperamos conocerte más!`
        
        return mensajePresentacion
    }

}

const persona1 = new bienvenida ('Franco', 'Frankito', 'Fútbol', 'Milanesa', 'End Game')

console.log(persona1.presentacion()) 

for(propiedad in persona1){
    console.log(persona1[propiedad])
}