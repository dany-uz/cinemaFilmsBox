// Preguntamos por un dato que está almacenado en la memoria del navegador

let receptor = JSON.parse(localStorage.getItem("peliculaSeleccionada"));

console.log(receptor);

let poster = receptor.poster;
let nombre = receptor.nombre;
let genero = receptor.genero;
let director = receptor.director;
let actores = receptor.actores;
let idioma = receptor.idioma;
let duracion = receptor.duracion;
let clasificacion = receptor.clasificacion;
let sinopsis = receptor.sinopsis;

let posterEnviar = document.getElementById("poster");
posterEnviar.src = poster;
let nombreEnviar = document.getElementById("titulo");
nombreEnviar.textContent = nombre;
let generoEnviar = document.getElementById("genero");
generoEnviar.textContent = genero;
let directorEnviar = document.getElementById("director");
directorEnviar.textContent = director;
let actoresEnviar = document.getElementById("actores");
actoresEnviar.textContent = actores;
let idiomaEnviar = document.getElementById("idioma");
idiomaEnviar.textContent = idioma;
let duracionEnviar = document.getElementById("duracion");
duracionEnviar.textContent = duracion;
let clasificacionEnviar = document.getElementById("clasificacion");
clasificacionEnviar.textContent = clasificacion;
let sinopsisEnviar = document.getElementById("sinopsis");
sinopsisEnviar.textContent = sinopsis;