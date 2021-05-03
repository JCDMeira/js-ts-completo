//* Aula 119 - Criando um gerador de CPFs válidos

/*
    _Nota_
    
*/
import GeraCPF from './modules/GeraCPF';
import './assets/css/style.css';

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    console.log(el);
    if (tag === 'button') {
        e.preventDefault();
        console.log('dentro');
        gerar();
    }
}
)
    function gerar() {
        const gera = new GeraCPF();
        const cpfGerado = document.querySelector('.cpf-gerado');
        cpfGerado.innerHTML = gera.geraNovoCpf();
    }

    //_ Poderia ser uma função auto invocada
    //?     |   Código  |
    //? (function () {
    //?     const gera = new GeraCPF();
    //?     const cpfGerado = document.querySelector('.cpf-gerado');
    //?     cpfGerado.innerHTML = gera.geraNovoCpf();
    //? })();
