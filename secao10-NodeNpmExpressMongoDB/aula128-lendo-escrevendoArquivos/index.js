//* Aula 128 - Lendo e escrevendo arquivos

/* 
    _Notas_
*/

const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const write = require('./modules/write');
const read = require('./modules/read');


const pessoas = [
    {nome: 'joão'},
    {nome: 'Maria'},
    {nome: 'Eduardo'},
    {nome: 'Luiza'},
];
const json = JSON.stringify(pessoas, '', 2);

// write(caminhoArquivo, json);

async function leArquivo(caminho){
    const dados = await read(caminho);

    renderizaDados(dados);
}

function renderizaDados(dados){
    dados = JSON.parse(dados);

    dados.forEach(val => {
        console.log(val);
        console.log(val.nome);
    });
}

leArquivo(caminhoArquivo)
