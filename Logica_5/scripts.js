const inputtext = document.getElementById('inputtext');
const bottun = document.getElementById('buttonclick');
const idade = document.getElementById('mostrarIdade');

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