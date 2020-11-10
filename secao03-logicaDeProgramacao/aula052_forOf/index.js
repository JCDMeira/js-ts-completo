//* Aula 52 - for of - estrutura de repetição

const nome = ['Jean','Carlos', 'De Meira'];

for(let i=0; i<nome.length; i++){
    console.log('for clássico: ',nome[i]);
}

console.log('################');

for(let i in nome){
    console.log('for in:', nome[i]);
}

console.log('################');

//_ Já acessa diretamente o valor
for(let valor of nome){
    console.log('for of:', valor)
}

console.log('################');

//#obs# os acima podem funcionar com uma string, iterando sobre as letras ou elementos da string
//#obs# o forEch não consegue iterar sobre uma string
nome.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
})

//_ para objetos pode diferenciar um pouco o for in funciona e quanto aos demais será falado
//_ mais detalhes adiante. Pode avaliar como não iterável, pois não associa com indíces.
//_ For clássico - geralmente para iteráveis (arryas e strings)
//_ fo in - retorna o índice ou chave (string, arrays e objetos)
//_ for of - retorna o valor em si (iteráveis, como arryas e strings)