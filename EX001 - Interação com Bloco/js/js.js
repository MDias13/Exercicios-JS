
let a = document.querySelector('#area');

a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function clicar(){
    
    a.innerText = 'Clicou';
    a.style.background = 'red';

}

function entrar() {

    a.innerText = 'Entrou';
}

function sair() {

    a.innerText = 'saiu';
    a.style.background = 'green';
}