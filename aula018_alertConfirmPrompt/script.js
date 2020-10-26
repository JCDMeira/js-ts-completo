//* Aula 18 - Alert, confirm e Prompt (Navegador)

//| Alert
alert('Mensagem');

//#nota# alert é um método do objeto window
//#obs# alert é um atalho para window.alert();
//_ o retorno é undefined, ou seja, não retorna valor algum.

//| Confirm
window.confirm('Deseja realmente apagar?');

//| prompt
//? sempre vai te retornar uma string
window.prompt('Digite o seu nome.');

//| é possível capturar o retorno da função

const confirma = confirm('Realmente deseja apagar?');
console.log('confirma tem valor:', confirma);

let num1 = prompt('Digite um número');
alert(`Você digitou: ${num1}`);
console.log(`Você digitou: ${num1}`);