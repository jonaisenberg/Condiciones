let cuadrado = document.querySelector("#square");
    cuadrado.addEventListener("click", function(){
        if (cuadrado.style.border == ''){
            cuadrado.style.border = '2px solid red';
        } else {
            cuadrado.style.border = '';}})