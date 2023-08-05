let verificar = document.querySelector("#verificar");
    verificar.addEventListener('click', function(){
        let datos = document.querySelector("#numbero").value;
        let datos1 = document.querySelector("#numbero1").value;
        let datos2 = document.querySelector("#numbero2").value;
        let cantidad = Number(datos) + Number(datos1) + Number(datos2);
        if (cantidad <= 10){
            datoFinal = document.querySelector(".resultado");
            datoFinal.innerHTML = "llevas " + cantidad + " stickers!!";
        } else {
            datoFinal = document.querySelector(".resultado");
            datoFinal.innerHTML = "llevas demasiados stickers!!";
        }
    })