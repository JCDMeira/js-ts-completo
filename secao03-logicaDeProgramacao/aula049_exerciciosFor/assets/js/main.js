const elementos = [
    {tag:'p', texto: 'criando Paragráfo'},
    {tag:'div', texto: 'criando div'},
    {tag:'section', texto: 'criando section'},
    {tag:'footer', texto: 'criando footer'},
];

const resultado = document.querySelector('.container');
const div = document.createElement('div');

for(let i=0; i< elementos.length; i++){
    const {tag , texto} = elementos[i];
    const tagCriada = document.createElement(tag);
    // tagCriada.innerHTML = texto;
    // tagCriada.innerText = texto; //? mais seguro que mudar o HTML, já que é só um texto.
    //? ou ainda
    let textoCriado = document.createTextNode(texto);
    tagCriada.appendChild(textoCriado);

    div.appendChild(tagCriada);
    console.log(tag);
}
console.log(div);

resultado.appendChild(div);
