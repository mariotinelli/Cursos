
var button = document.querySelector("#btn");
var info = document.querySelector("#info");
//var infoReprovado = document.querySelector("#info-reprovado");
var isVisibleAprovado = false;


function getNotas() {
    var nota1 = document.querySelector("#nota-primeiro-bimestre").value;
    var nota2 = document.querySelector("#nota-segundo-bimestre").value;
    var nota3 = document.querySelector("#nota-terceiro-bimestre").value;
    var nota4 = document.querySelector("#nota-quarto-bimestre").value;

    return [nota1, nota2, nota3, nota4]
}

function handleClick(e) {

    e.preventDefault()    

    var mediaFinal = (getNotas().reduce((num, mediaFinal) => Number(mediaFinal) + Number(num)) / 4).toFixed(2);     

    if (mediaFinal >= 7 && mediaFinal >= 0) {    
        info.classList.add("aprovado"),
        info.classList.remove("reprovado")           
        info.textContent = "Aprovado, sua média foi " + mediaFinal;
    } else if (mediaFinal < 7 && mediaFinal >= 0){
        info.classList.add("reprovado");
        info.classList.remove("aprovado");
        info.textContent = "Reprovado,  sua média foi " + mediaFinal;
    } else {
        info.textContent = "Valor menor que 0!";
    }


    document.querySelector("#nota-primeiro-bimestre").value = "";
    document.querySelector("#nota-segundo-bimestre").value = "";
    document.querySelector("#nota-terceiro-bimestre").value = "";
    document.querySelector("#nota-quarto-bimestre").value = "";
}

button.addEventListener("click", handleClick);

setTimeout(() => {
    info.classList.remove("reprovado");
    info.classList.remove("aprovado");
    info.textContent = "";
}, 3000);


