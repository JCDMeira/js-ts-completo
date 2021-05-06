//* Aula 124 - Módulos (2)

/* 
    _Notas
*/
const multiplica = require('./mod');
const Cachorro = require('./mod1');

console.log(multiplica(2, 2));

const cachorrinho = new Cachorro('Dog');
cachorrinho.latir();

//_ variáveis que mostram o caminho até o arquivo e a pasta respectivamente.
console.log();
console.log(__filename);
console.log();
console.log(__dirname);
console.log();

//# exemplo de uso
//_ permite navegar a partir do diretório atual,
//_ e com esse modelo o path resolve da forma conveniente,
//_ adequando a barra ao sistema operacional por exemplo.

const path = require('path');

console.log(path.resolve(__dirname, '..', '..', 'aula123-modulos1'));
