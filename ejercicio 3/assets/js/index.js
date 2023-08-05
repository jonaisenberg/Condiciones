    entrar.addEventListener('click', function(){
        let passwordOne = document.querySelector("#uno").value;
        let passwordTwo = document.querySelector("#dos").value;
        let passwordThree = document.querySelector("#tres").value;
        if (passwordOne + passwordTwo + passwordThree == 911){
            result = document.querySelector(".resultPassword");
            result.innerHTML = "password 1 correcto";
        } else if (passwordOne + passwordTwo + passwordThree == 714){
            result = document.querySelector(".resultPassword");
            result.innerHTML = "password 2 correcto";
        } else {
            result = document.querySelector(".resultPassword");
            result.innerHTML = "password incorrecto";
        }
    })