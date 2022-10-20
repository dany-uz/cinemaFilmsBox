export function pintarPeliculas(peliculas, estrenos) {

    let fila = document.getElementById("fila");

    peliculas.forEach(function (pelicula) {
    
        // 1- Creamos una columna para cada pelicula
        let columna = document.createElement("div");
        columna.classList.add("col");
    
        // 2- Creamos una tarjeta para cada pelicula
        let tarjeta = document.createElement("div");
        tarjeta.classList.add("card", "h-100", "p-2");
    
        // 3- Creamos una imagen para cada pelicula
        let imagen = document.createElement("img");
        imagen.classList.add("card-img-top");
        imagen.src = pelicula.Imagen;
    
        // 4- Creamos un nombre para cada pelicula
        let nombre = document.createElement("h4");
        nombre.classList.add("card-title");
        nombre.textContent = pelicula.Nombre;
    
        // EXTRA - Mostramos el director
        let director = document.createElement("p");
        director.classList.add("card-text");
        director.textContent = pelicula.Director;
    
        // EXTRA - Mostramos el array de actores en un parrafo y despues de cada coma agregamos un espacio
        let actores = document.createElement("p");
        actores.classList.add("card-text");
        actores.textContent = pelicula.Actores.join(", ");
    
        // 5- Creamos el genero para cada pelicula
        let genero = document.createElement("p");
        genero.classList.add("card-text");
        genero.textContent = pelicula.Genero;
    
        // 6- Creamos el idioma para cada pelicula
        let idioma = document.createElement("p");
        idioma.classList.add("card-text");
        idioma.textContent = pelicula.Idioma;
    
        // 7- Creamos la duracion para cada pelicula
        let duracion = document.createElement("p");
        duracion.classList.add("card-text");
        duracion.textContent = pelicula.Duracion;
    
        // 8- Creamos la clasificacion para cada pelicula
        let clasificacion = document.createElement("p");
        clasificacion.classList.add("card-text");
        clasificacion.textContent = pelicula.Clasificacion;
    
        // 9- Creamos la sinopsis para cada pelicula y la acortamos
        let sinopsis = document.createElement("p");
        sinopsis.classList.add("card-text");
        sinopsis.textContent = pelicula.Sinopsis;
        sinopsis.textContent = sinopsis.textContent.substring(0, 100) + "...";
    
        //Padres - Hijos
        tarjeta.appendChild(imagen);
        tarjeta.appendChild(nombre);
        tarjeta.appendChild(genero);
        tarjeta.appendChild(director);
        tarjeta.appendChild(actores);
        tarjeta.appendChild(idioma);
        tarjeta.appendChild(duracion);
        tarjeta.appendChild(clasificacion);
        tarjeta.appendChild(sinopsis);
        columna.appendChild(tarjeta);
        fila.appendChild(columna);
    
    })
    
    let fila2 = document.getElementById("fila2");
    
    estrenos.forEach(function (estreno) {
    
        // 1- Creamos una columna para cada pelicula
        let columna = document.createElement("div");
        columna.classList.add("col");
    
        // 2- Creamos una tarjeta para cada pelicula
        let tarjeta = document.createElement("div");
        tarjeta.classList.add("card", "h-100", "p-2");
    
        // 3- Creamos una imagen para cada pelicula
        let imagen = document.createElement("img");
        imagen.classList.add("card-img-top");
        imagen.src = estreno.Imagen;
    
        // 4- Creamos un nombre para cada pelicula
        let nombre = document.createElement("h4");
        nombre.classList.add("card-title");
        nombre.textContent = estreno.Nombre;
    
        // EXTRA - Mostramos el director
        let director = document.createElement("p");
        director.classList.add("card-text");
        director.textContent = "Director: " + estreno.Director;
    
        // EXTRA - Mostramos el array de actores en un parrafo y despues de cada coma agregamos un espacio
        let actores = document.createElement("p");
        actores.classList.add("card-text");
        actores.textContent = "Actores: " + estreno.Actores.join(", ");
    
        // 5- Creamos el genero para cada pelicula
        let genero = document.createElement("p");
        genero.classList.add("card-text");
        genero.textContent = "Genero: " + estreno.Genero;
    
        // 6- Creamos el idioma para cada pelicula
        let idioma = document.createElement("p");
        idioma.classList.add("card-text");
        idioma.textContent = "Idioma: " + estreno.Idioma;
    
        // 7- Creamos la duracion para cada pelicula
        let duracion = document.createElement("p");
        duracion.classList.add("card-text");
        duracion.textContent = "Duracion: " + estreno.Duracion;
    
        // 8- Creamos la clasificacion para cada pelicula
        let clasificacion = document.createElement("p");
        clasificacion.classList.add("card-text");
        clasificacion.textContent = "Clasificacion: " + estreno.Clasificacion;
    
        // 9- Creamos la sinopsis para cada pelicula y la acortamos
        let sinopsis = document.createElement("p");
        sinopsis.classList.add("card-text");
        sinopsis.textContent = "Sinopsis: " + estreno.Sinopsis;
        sinopsis.textContent = sinopsis.textContent.substring(0, 100) + "...";
    
        //Padres - Hijos
        tarjeta.appendChild(imagen);
        tarjeta.appendChild(nombre);
        tarjeta.appendChild(genero);
        tarjeta.appendChild(director);
        tarjeta.appendChild(actores);
        tarjeta.appendChild(idioma);
        tarjeta.appendChild(duracion);
        tarjeta.appendChild(clasificacion);
        tarjeta.appendChild(sinopsis);
        columna.appendChild(tarjeta);
        fila2.appendChild(columna);
    })
}