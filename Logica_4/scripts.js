const tarefainput = document.getElementById('inputtext');
const butao = document.getElementById('buttonclick');
const lista = document.getElementById('listaTarefas');
const limpar = document.getElementById('buttonLimpar');

function clickTarefa () {
    const texto = tarefainput.value; // pega valor do input
    if (texto.trim() !== "") { // Evita adicionar vazio
        const li = document.createElement('li');
        li.textContent = tarefainput.value;
        lista.appendChild(li);
        tarefainput.value = ""; // Limpa o input
    }else {
        alert("O campo esta vazio");
    }
}

function buttonlimpar () {
    lista.innerHTML = "";
}

butao.addEventListener("click", clickTarefa);
limpar.addEventListener("click", buttonlimpar);