import { peliculas } from '../helper/db.js';
import { estrenos } from '../helper/db.js';
import { pintarPeliculas } from '../helper/pintarPeliculas.js';

let fila = document.getElementById("fila");
let fila2 = document.getElementById("fila2");

pintarPeliculas(peliculas, estrenos);

let peliculaSeleccionada = {};

fila.addEventListener("click", function(e) {
    peliculaSeleccionada.poster = e.target.parentElement.querySelector("img").src;
    peliculaSeleccionada.nombre = e.target.parentElement.querySelector("h4").textContent;
    let arrayPelicula = e.target.parentElement.querySelectorAll("p");
    peliculaSeleccionada.genero = arrayPelicula[0].textContent;
    peliculaSeleccionada.director = arrayPelicula[1].textContent;
    peliculaSeleccionada.actores = arrayPelicula[2].textContent;
    peliculaSeleccionada.idioma = arrayPelicula[3].textContent;
    peliculaSeleccionada.duracion = arrayPelicula[4].textContent;
    peliculaSeleccionada.clasificacion = arrayPelicula[5].textContent;
    peliculaSeleccionada.sinopsis = arrayPelicula[6].textContent;

    console.log(peliculaSeleccionada);

    localStorage.setItem("peliculaSeleccionada", JSON.stringify(peliculaSeleccionada));

    window.location.href = "./src/views/ampliarInfoPelicula.html";

})

fila2.addEventListener("click", function(e) {
    peliculaSeleccionada.poster = e.target.parentElement.querySelector("img").src;
    peliculaSeleccionada.nombre = e.target.parentElement.querySelector("h4").textContent;
    let arrayPelicula = e.target.parentElement.querySelectorAll("p");
    peliculaSeleccionada.genero = arrayPelicula[0].textContent;
    peliculaSeleccionada.director = arrayPelicula[1].textContent;
    peliculaSeleccionada.actores = arrayPelicula[2].textContent;
    peliculaSeleccionada.idioma = arrayPelicula[3].textContent;
    peliculaSeleccionada.duracion = arrayPelicula[4].textContent;
    peliculaSeleccionada.clasificacion = arrayPelicula[5].textContent;
    peliculaSeleccionada.sinopsis = arrayPelicula[6].textContent;

    console.log(peliculaSeleccionada);

    localStorage.setItem("peliculaSeleccionada", JSON.stringify(peliculaSeleccionada));

    window.location.href = "./src/views/ampliarInfoPelicula.html";

})