const text = document.getElementById('hiden');

function ocultar () {
   const displayAtual = window.getComputedStyle(text).display;
   if (displayAtual === 'none') {
    text.style.display = 'block';
   }else {
    text.style.display = 'none';
   }
}

document.getElementById('buttonVisivel').addEventListener('click', ocultar);