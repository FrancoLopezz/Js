const fecha = document.querySelector('.fecha')

const FECHA = new Date()
fecha.innerHTML = `${FECHA.toLocaleDateString('es-MX',{weekday:'long',month:'short',day:'numeric'})}.`

let username = localStorage.getItem("username");
let h1Bienvenida = document.querySelector('.title');

if (!username) {
    username = prompt("Inserte su nombre");
    localStorage.setItem("username", username);
}

h1Bienvenida.innerText = ('Hola, ' + username)

const artistas = [
    {
    id: 1,
    title: "Coffee Bean",
    artist: "Travis Scott",
    imgSrc: "media/img/travis.jpg",
    agregadoALista: false,
    duracion: "3:17",
    album: "ASTROWORLD"
    },
    {
    id: 2,
    title: "Top 5",
    artist: "Duki",
    imgSrc: "media/img/duko.jpg",
    agregadoALista: false,
    duracion: "2:27",
    album: "Temporada de Reaggeton"
    },
    {
    id: 3,
    title: "Un coco",
    artist: "Bad Bunny",
    imgSrc: "media/img/badbunny.jpg",
    agregadoALista: false,
    duracion: "3:17",
    album: "Un verano sin ti"
    },
    {
    id: 4,
    title: "Stan",
    artist: "Eminem",
    imgSrc: "media/img/eminem.jpg",
    agregadoALista: false,
    duracion: "8:09",
    album: "The Marshall Mathers LP"
    },
    {
    id: 5,
    title: "The Messenger",
    artist: "Linkin Park",
    imgSrc: "media/img/linkinpark.jpg",
    agregadoALista: false,
    duracion: "3:02",
    album: "A Thousand Suns"  
    },
    {
    id: 7,
    title: "Conversations",
    artist: "Juice WRLD",
    imgSrc: "media/img/juicewrldlnd.jpg",
    agregadoALista: false,
    duracion: "4:43",
    album: "Legends Never Die"  
    },
    {
    id: 8,
    title: "Irresponsables",
    artist: "Babasonicos",
    imgSrc: "media/img/infame.jpg",
    agregadoALista: false,
    duracion: "2:37",
    album: "Infame"  
    }
]

let containter = document.querySelector('.container')
let svgs = []

function imprimirCanciones() {

    for (cancion of artistas){
        containter.innerHTML += `<section class="container">
    
                                    <article class="box-song">
    
                                        <div>
                                            <img src="${cancion.imgSrc}" alt="" class="img-song">
                                        </div>
                                        <div class="descripcion"
                                            <p>${cancion.title}</p>
                                            <p>${cancion.artist}</p>
                                            <p>${cancion.album}</p>
                                            <p>${cancion.duracion}</p>
                                        </div>
                                        <div class="fav">
    
                                        <svg class="unlike" id="${cancion.id}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"/></svg>
    
                                        </div>
    
                                    </article>
    
                                </section>`

        
    }

    svgs = document.querySelectorAll('svg');
}

let resultadoFavoritos = document.querySelector('.listas');
let recuperoStorage = localStorage.getItem('favoritos');
let favoritos = [];


if (recuperoStorage != null){
    favoritos = JSON.parse(recuperoStorage);

    favoritos.map(favorito => {
        let idFav = favorito.id
        artistas[idFav - 1].like = true

        resultadoFavoritos.innerHTML += `
            <article class="box-song" id="id-${favorito.id}" >
                <img src="${favorito.imgSrc}" alt="" class="img-song">
                <div class="descripcion">
                    <p>${favorito.title}</p>
                    <p>${favorito.artist}</p>
                </div>  
            </article>`

        console.log(artistas[idFav - 1].like)
    })

    imprimirCanciones()

    for(svg of svgs){
       
        let artista = svg.attributes[1].value.split('-')
        console.log(artista)
    }

    mostrarYGuardarCanciones();
}

else{ 
    imprimirCanciones()
    mostrarYGuardarCanciones();
}


function mostrarYGuardarCanciones(){
    console.log(svgs)
    for(svg of svgs){
        svg.onclick = (e)=>{

            let element = e.target.parentElement;

            let id = element.attributes.id.value; 
            let track = artistas.find(e => e.id == id);

            if(favoritos.includes(track)){
                artistas[track.id -1].like = false
                console.log("Cancion repedita");
                element.classList.remove('like');

                let trackASacar = favoritos.indexOf(track);
                favoritos.splice(trackASacar,1);

                let trackRepetido = document.querySelector(`#id-${track.id}`);

                resultadoFavoritos.removeChild(trackRepetido);

            }else{
                console.log("no se repitio");
                artistas[track.id -1].like = true
                element.classList.add('like');
                favoritos.push(track);

                resultadoFavoritos.innerHTML += `
                                <article class="box-song" id="id-${track.id}" >
                                    <img src="${track.imgSrc}" alt="" class="img-song">
                                    <div class="descripcion">
                                        <p>${track.title}</p>
                                        <p>${track.artist}</p>
                                    </div>  
                                </article>`

            }
            
            localStorage.setItem('favoritos',JSON.stringify(favoritos));

        }
    }
} 