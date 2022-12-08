const botaoBurger = document.querySelector ('.fa-bars');
const btnFechar = document.querySelector('.x-menup')
const barraDeNavegacao = document.querySelector ('nav');
const barraDePesquisa = document.querySelector ('.input1');

botaoBurger.addEventListener('click', abrirMenu)
btnFechar.addEventListener('click', fecharMenu)
barraDePesquisa.addEventListener('click', abrirBarra)


function abrirMenu(){
    barraDeNavegacao.classList.add('ativo')
    botaoBurger.style.display = 'none'
    btnFechar.style.display = 'block'
}

function fecharMenu() {
    barraDeNavegacao.classList.remove('ativo')
    botaoBurger.style.display = 'block'
    btnFechar.style.display = 'none'
}

function abrirBarra() {
    barraDePesquisa.style.display = 'block'
}


// hoisting

