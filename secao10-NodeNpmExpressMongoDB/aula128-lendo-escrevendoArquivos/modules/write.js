const fs = require('fs').promises;
// const path = require('path');
// const caminhoArquivo = path.resolve(__dirname, '..', 'teste.txt');
// const caminhoArquivo = path.resolve(__dirname, '..', 'teste.json');

// const pessoas = [
//     {nome: 'joão'},
//     {nome: 'Maria'},
//     {nome: 'Eduardo'},
//     {nome: 'Luiza'},
// ];
// const json = JSON.stringify(pessoas, '', 2);

module.exports = (caminho, dados)=>{
    fs.writeFile(caminho, dados, {flag:'w', encoding: 'utf8'})
}

/*
    _Nota_
    _ O comando vai criar o arquivo caso não exista e escrever o que se manda 
    _ a flag w garante que antes de escrever se apague tudo que está escrito na mesma
    _ e depois escreva o que foi enviado.
    _ o encoding já manda como padrão o utf8
    _ A flag a seria appending, o que garantiria que será sempre escrito uma nova frase.
*/