//declaração de variaveis

const inputtext = document.getElementById('inputtext');
const bottun = document.getElementById('buttonclick');
const idade = document.getElementById('mostrarIdade');

// função calcular
function calcular () {
    const texto = inputtext.value;
    const ano = new Date().getFullYear();
    resultado = ano - texto;
    inputtext.value = "";
    if (resultado >= 18) {
        alert(`você é maior de idade e sua idade é ${resultado} anos`);
    }else {
        alert(`Não é maior de idade e sua idade é ${resultado} anos`);
    }
}

bottun.addEventListener('click', calcular);


// Versão mais enxuta

// const inputText = document.querySelector('#inputtext');
// const button = document.querySelector('#buttonclick');

// const calcular = () => {
//   const anoAtual = new Date().getFullYear();
//   const anoNascimento = Number(inputText.value);
  
//   if (!anoNascimento) {
//     alert('Por favor, insira um ano válido.');
//     return;
//   }

//   const idade = anoAtual - anoNascimento;
//   inputText.value = '';

//   alert(
//     idade >= 18
//       ? `Você é maior de idade e tem ${idade} anos.`
//       : `Você não é maior de idade e tem ${idade} anos.`
//   );
// };

// button.addEventListener('click', calcular);
