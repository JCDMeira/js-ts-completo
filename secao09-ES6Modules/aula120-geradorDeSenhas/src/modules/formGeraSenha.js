import geraSenha from './geradores';

const senhaGerada = document.querySelector('.senha-gerada');
const limite = document.querySelector('.limite');
const chkMaiuscular = document.querySelector('.chk-maiusculas');
const chkMinusculas = document.querySelector('.chk-minusculas');
const chkNumeros = document.querySelector('.chk-numeros');
const chkSimbolos = document.querySelector('.chk-simbolos');
const gerarSenha = document.querySelector('.gerar-senha');

export default () => {
    gerarSenha.addEventListener('click', ()=>{
        senhaGerada.innerHTML = gera();
    })

};

function gera(){

    const senha = geraSenha(
        limite.value,
        chkMaiuscular.checked,
        chkMinusculas.checked,
        chkNumeros.checked,
        chkSimbolos.checked,
    );
    return senha || "Nada selecionado";
}
