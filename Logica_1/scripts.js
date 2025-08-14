// link o botão pelo id
const button = document.getElementById('radon-button');

//Função gerar cor aleatoria 
function gerarCorAleatoria () {
    const letrashex ='0123456789abcdef';
    let cor = '#';
    for (let i = 0; i < 6; i++) {
        cor += letrashex[Math.floor(Math.random() * 16)];
    }
    return cor;
}

//função chamar botão click
function buttonClick() {
    const elemento = document.getElementById('mudarDeCor'); // Pega o id do body
    if (elemento) {
        let cor = gerarCorAleatoria();
        elemento.style.backgroundColor = gerarCorAleatoria(); //Muda  a cor
        subTitulo(cor);
        
    }else {
        console.error(`Erro Elemento com ID "mudarDeCor" não encontrado`);
    }
}

// função que altera o elemento H3 
function subTitulo() {
    const elemento = document.getElementById('nomeCor'); // Pega o Id do span
    elemento.innerHTML = gerarCorAleatoria();
}

// Adicionar o evento ao click do botão
button.addEventListener("click", buttonClick);



