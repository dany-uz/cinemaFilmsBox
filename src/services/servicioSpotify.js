// URI = URL + ENDPOINT -> Endpoint es la parte de la URL que cambia según la petición que se haga.
// const uri = 'https://api.spotify.com/v1/albums/7a78GiEowpaCa7ZJs44xUU/tracks?market=ES&limit=14&offset=1';
const uri = 'https://api.spotify.com/v1/artists/53XhwfbYqKCa1cC15pYq2q/top-tracks?market=US';
// Token de acceso a la API
// const token = 'Bearer BQD927pNFyT6VLkob5dLzUd-EAp3nq49SYnt1OeRbUwzHnUl4BZXUspyZVsO6M6m65Rq1fbZA0ZThzoW7k_4kb77hyWpRqB1uewBXsGiAbhtgkkEpahS1yVW9MRIlxcnHcKCgQxn9vuEp__iYbFA_F_0VqanlihT2gUIzxSv5YjwK2JVUtLDFSXUiMqdWnwoonw';
const token = 'Bearer BQCxaSIJRLCwLLWpYoVaArRvOIBtIzjaTYNZ8SPnOHYwK1E357Vq29XbMQ-k6_cEJl-yU6zGte1MTV_4O2_HGK86T5LLjxE-FQOCIKiO87oP2fmTgupBP7l2d8X3nH5yuvCJwM6ZR5Qe2vqzknSJt-RZ-7VRrdUKMh4XGbwsVga4L5ZpS75IPquQ8E32bOJRRoo';
// Petición GET
const request = {
    method: 'GET',
    headers: { Authorization: token }
};


// Hacer la petición
fetch(uri, request)
.then(function (response) { // then es una promesa que se ejecuta cuando la petición se resuelve.
    return response.json(); // Convertir la respuesta a JSON (JavaScript Object Notation)
})
.then(function (response) {
    let canciones = response.tracks;
    let fila = document.getElementById("fila");
    console.log(canciones);
    canciones.forEach(function (cancion) {
        console.log(cancion.name);
        console.log(cancion.preview_url);

        let columna = document.createElement("div");
        columna.classList.add("col");

        let tarjeta = document.createElement("div");
        tarjeta.classList.add("card", "h-100");

        let audio = document.createElement("audio");
        audio.setAttribute("controls", "controls");
        audio.setAttribute("src", cancion.preview_url);

        let titulo = document.createElement("h5");
        titulo.classList.add("card-title", "text-center");
        titulo.innerText = cancion.name;

        tarjeta.appendChild(titulo);
        tarjeta.appendChild(audio);
        columna.appendChild(tarjeta);
        fila.appendChild(columna);


    });
})
.catch(function (error) {
    console.log(error); // Imprimir el error en la consola
});