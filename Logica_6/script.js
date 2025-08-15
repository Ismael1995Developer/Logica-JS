 const lista = document.getElementById('listaDeCompras');
 const inputProduto = document.getElementById('inputProdutos');
 let listaProdutos = ["carne","cebola","milho","ervilha","lanche"];

 // Inicializa lista na tela
listaProdutos.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    lista.appendChild(li);
});

 // Função de adicionar na lista produtos
 function adicionar () {
    const produto = inputProduto.value.trim(); // pegou valor input
    if (produto) {
        const li = document.createElement('li');
        li.textContent = produto;
        lista.appendChild(li);
        listaProdutos.push(produto);
        inputProduto.value = ""; //limpa o campo input
    }
 }

 // Função para remover da lista 
 function remover () {
    const produto = inputProduto.value.trim();
    const index = listaProdutos.indexOf(produto);
    if (index > -1) {
        listaProdutos.splice(index, 1);
        lista.innerHTML = "";
        listaProdutos.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            lista.appendChild(li);
            inputProduto.value = "";
        });
    }
 }

 // Função para procurar na lista 
 function pesquisar () {
    const termo = inputProduto.value.trim().toLowerCase();
    lista.innerHTML = "";
    listaProdutos.forEach(produto => {
        if (produto.toLowerCase().includes(termo)) {
            const li = document.createElement('li');
            li.textContent = produto;
            lista.appendChild(li);
        }
    });
}


 document.getElementById('buttonAdicionar').addEventListener("click", adicionar);
 document.getElementById('buttonRemover').addEventListener("click", remover);
 document.getElementById('buttonPesquisar').addEventListener("click", pesquisar);