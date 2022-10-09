import { asientos } from '../helper/db.js';
import { pintarAsientos } from '../helper/pintarSillas.js';

let cinema = document.getElementById("cinemaRoom");

pintarAsientos(asientos, cinema);

cinema.addEventListener("click", function(e){
    if(e.target.tagName == "IMG"){
        
        let id = e.target.getAttribute("id");

        asientos.forEach(function(hilera){
            hilera.forEach(function(asiento){
                if(asiento.id == id){
                    if(asiento.estado == 0){
                        asiento.estado = 1;
                        e.target.src = "../../assets/img/Puesto-Verde.png";
                    } else if(asiento.estado == 1){
                        asiento.estado = 0;
                        e.target.src = "../../assets/img/Puesto.png";
                    }
                }
            });
        });

        // Cambiar las fotos de manera totalmente manual
        // if(e.target.getAttribute("src") == "../../assets/img/Puesto.png"){
        //     e.target.setAttribute("src", "../../assets/img/Puesto-Verde.png");
        // } else if(e.target.getAttribute("src") == "../../assets/img/Puesto-Verde.png"){
        //     e.target.setAttribute("src", "../../assets/img/Puesto.png");
        // }
    }
});