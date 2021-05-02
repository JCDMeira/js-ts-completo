//* Aula 114 - Babel e "can i use..."

/*
    | Sites e referências
        | https://caniuse.com
        | https://babeljs.io
    
    _Nota_
    _ observar se o código é compatível com versões específicas de navegadores
    _ isso faz a diferença se sua aplicação irá funcionar adequadamente no
    _ cliente que está consumindo a sua aplicação.
    _ O babel é um transpilador, que é um compilador e tradutor de código
    _ Ao escrever um código com técnicas mais antigas o babel pode transpilar 
    _ o código para versões mais antigas. Fazendo uma versão do seu código
    _ que será suportada por navegadores mais antigos.

    !Importante!
    !Comandos
    ! npm init -y
    ! npm install --save-dev @babel/cli @babel/present-env @babel/core
    ! npm gitignore node
    ! npm babel index.js -o bundle.js --presets-@babel/env
    @ O código acima tem o index.js por se tratar do nome do arquivo em questão
    @ e o bundle.js é o arquivo que o babel irá criar, os nomes poderia ser 
    @ modificados caso fosse desejado. Somente o primeiro citado tem que ser 
    @ o nome do arquivo em que se está trabalhando. Bundle é um nome convencional
    @ recomendável, pois pode ser a junção de vários arquivos.
    ! e se precisa indicar qual o presets será usado.
    _ ao usar isso seria usado o arquivo bundle.js na chamada de script no HTML.
    _ para assim usar o arquivo que será compatível com todos (ou a maioria dos navegadores)
    ! é possível fazer um script que fica "observando" o código e recompilando o bundle
    ! e assim não ter que ficar reaplicando o código no terminal.
    _ no arquivo packge.json -> scripts
        _ copie o último script, então coloque uma vírgula no mesmo, tecle enter e
        _ cole o conteúdo (sem vírgula), mude o conteúdo dentro das aspas duplas -> ""
        _ no valor coloque o nome que deseja dar ao primeiro script, no segundo
        ! insira -> babel ./index.js -o ./bundle.js --presets=@babel/env -w
        _ onde novamente index é o nome do arquivo inicial e bundle o do resultante
        _ ficando então assim (por exemplo): 

        _ "scripts": {
        _ "test": "echo \"Error: no test specified\" && exit 1",
            # primeira linha já existente + ( , ) ao final
        _ "babel": "babel ./index.js -o ./bundle.js --presets=@babel/env -w"
            # linha do comando adicionada
        _ },
        ! e para rodar o script aplique o comando a seguir:
        ! npm run babel -> substitua babel pelo nome dado ao seu comando
*/

const nome = "Jean";
const obj = {nome};
const novoObj = {...obj};
console.log(novoObj);

class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

