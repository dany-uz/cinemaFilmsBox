import { asientos } from "../helper/db.js";

let cinemaRoom = document.getElementById("cinemaRoom");
let reservarAsientos = document.getElementById("reservarAsientos");

let asientosSeleccionados = [];
let contadorAsientos = 0;

// Recorremos el localStorage "peliculaSeleccionada"
let peliculaSeleccionada = JSON.parse(localStorage.getItem("peliculaSeleccionada"));
document.getElementById("titulo").innerHTML = peliculaSeleccionada.nombre;

cinemaRoom.addEventListener("click", function (e) {
    // Tomaremos el id del asiento seleccionado y si lo deseleccionamos, lo eliminaremos del array
    let id = e.target.id;
    let lugarSeleccionado = asientosSeleccionados.indexOf(id);
    if (lugarSeleccionado > -1) {
        asientosSeleccionados.splice(lugarSeleccionado, 1);
        contadorAsientos--;
    } else {
        // Si el asiento no está seleccionado, lo agregamos al array
        asientosSeleccionados.push(id);
        contadorAsientos++;
    }

    // Valor total
    let valorTotal = contadorAsientos * 12000;
    // Mostramos el valor total con el signo de pesos
    document.getElementById("total").innerHTML = "$" + valorTotal.toLocaleString( "es-CO" );

    // Mostramos los asientos seleccionados en el id asientosSeleccionados
    document.getElementById("asientosSeleccionados").innerHTML = contadorAsientos;
    
    // Buscamos el asiento en el array de asientos
    asientos.forEach(function (fila) {
        fila.forEach(function (asiento) {
            if (asiento.id == id) {
                console.log(asiento);
                asientosSeleccionados.push(asiento);
            }
        });
    });

});

reservarAsientos.addEventListener("click", function (e) {
    asientosSeleccionados.forEach(function (asiento) {
        if (asiento.estado == 1) {
            // Cambiamos el estado del asiento a 2 en la base de datos
            asiento.estado = 2;
            // Cambiamos el estado del asiento a 2 en el DOM
            let imgAsiento = document.getElementById(asiento.id);
            imgAsiento.src = "../../assets/img/Puesto-Rojo.png";
        }
    });

    localStorage.setItem("asientosSeleccionados", JSON.stringify(asientos));

    // Redireccionamos a la confirmación de la reserva
    window.location.href = "spinnerSuccess.html";
});