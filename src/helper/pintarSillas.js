export function pintarAsientos(asientos, cinema) {

    asientos.forEach(function(hilera){
        let fila = document.createElement("div");
        fila.classList.add("row");
        hilera.forEach(function(asiento){
            let columna = document.createElement("div");
            columna.classList.add("col-1");
            columna.classList.add("p-1");
            columna.classList.add("m-1");
            columna.classList.add("text-center");
            columna.classList.add("align-middle");
    
            let imgAsiento = document.createElement("img");
            imgAsiento.setAttribute("id", asiento.id);
            imgAsiento.setAttribute("src", "../../assets/img/Puesto.png");
            imgAsiento.classList.add("img-fluid");
            imgAsiento.classList.add("w-100");
            // 0 Negro = Disponible
            // 1 Verde = Seleccionado
            // 2 Rojo = Ocupado
            // 3 Azul = Discapacitados
            if(asiento.estado==0){
                imgAsiento.setAttribute("src", "../../assets/img/Puesto.png");
            } else if(asiento.estado==1){
                imgAsiento.setAttribute("src", "../../assets/img/Puesto-Verde.png");
            } else if(asiento.estado==2){
                imgAsiento.setAttribute("src", "../../assets/img/Puesto-Rojo.png");
            } else if(asiento.estado==3){
                imgAsiento.setAttribute("src", "../../assets/img/Puesto-Azul.png");
            }
            
            columna.appendChild(imgAsiento);
            fila.appendChild(columna);
        });
        cinema.appendChild(fila);
    });
} 