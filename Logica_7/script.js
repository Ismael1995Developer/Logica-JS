//varivais 
const inputAluno = document.querySelector('#inputAlunos');
const inputNotas1 = document.querySelector('#inputNotas1');
const inputNotas2 = document.querySelector('#inputNotas2');
const inputNotas3 = document.querySelector('#inputNotas3');
const buttonCadastro = document.querySelector('#buttonCadastro');
const tabela = document.querySelector('#tabela');

//array 
let alunos = [
     {id: 1, nome:"carlos", nota1: 5, nota2: 4, nota3: 5,},
     {id: 2, nome:"Roberto", nota1: 3, nota2: 2, nota3: 7,}
    ];


// função de atualizar tabela
const atulizarTabela = () => {
    tabela.innerHTML = ""; // limpa a tabela antes de renderizar 

    alunos.forEach(aluno => {
        const media = (aluno.nota1 + aluno.nota2 + aluno.nota3) / 3;
        const status = media >= 7 ? "Aprovado" : "Reprovado";

        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${aluno.id}</td>
        <td>${aluno.nome}</td>
        <td>${media.toFixed(2)}</td>
        <td>${status}</td>`;

        tabela.appendChild(tr);
    });

};

//função cadastro de notas e alunos
const cadastro = () => {
    
    const nome = inputAluno.value.trim();
    const n1 = Number(inputNotas1.value);
    const n2 = Number(inputNotas2.value);
    const n3 = Number(inputNotas3.value);

    // validação que só permite numero validos e não permite campos vazios
    /*if (
        nome.trim() !== "" &&
        n1 !== "" && !isNaN(n1) &&
        n2 !== "" && !isNaN(n2) &&
        n3 !== "" && !isNaN(n3)
      ) */
     
     // validação que só permite numero validos com !isNaN 
    if(nome && !isNaN(n1) && !isNaN(n2) && !isNaN(n3)) {
        const novoId = alunos.length > 0 ? alunos[alunos.length - 1].id + 1 : 1;
        alunos.push({id: novoId, nome, nota1: n1, nota2: n2, nota3: n3 });
        atulizarTabela();
        
        //Limpa os inputs
        inputAluno.value = "";
        inputNotas1.value = "";
        inputNotas2.value = "";
        inputNotas3.value = "";

    }else {
        alert('Preencha os campos corretamente!');
    }
};

// evento de clique no botão 
buttonCadastro.addEventListener('click', cadastro);

//atualiza a tabela 
atulizarTabela(); 