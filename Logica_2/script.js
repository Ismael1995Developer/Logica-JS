let numeroInicial = 0;


function buttonClick () {
    numeroInicial++;
    document.getElementById('numero').innerHTML = numeroInicial;
}

function buttonZera () {
    numeroInicial = 0;
    document.getElementById('numero').innerHTML = numeroInicial;
}

function buttonSomaDoblo () {
        numeroInicial += 2;
        document.getElementById('numero').innerHTML = numeroInicial;
    }  

document.getElementById('buttonConta').addEventListener("click", buttonClick);
document.getElementById('buttonZerar').addEventListener("click", buttonZera);
document.getElementById('buttonDoblo').addEventListener("click", buttonSomaDoblo);


