//* Aula 121 - Core-js e regenerator-runtime

/*
    _Nota_
    _ As duas primeiras importações garantem que o bundle.js 
    _ seja compatível com navegadores mais antigos.
    _ Com o regenerator-runtime o já garante que certos erros
    _ não apareçam no google chrome e o core-js
    _ faz a compatibilidade de certas coisas que o regenerator
    _ não consegue, tornando o código melhor para uso em
    _ intenet explorer por exemplo
*/
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import executa from './modules/promises';

import './assets/css/style.css';

executa();
