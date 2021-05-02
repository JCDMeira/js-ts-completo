//* Aula 115 - Webpack (boilerplate)

/*
    
    _Nota_
    _Boilerplate é algo como um template para o webpack
    _ e ele que irá converter o arquivo para versões mais antigas
    _ e assim ser aceito em mais navegadores.
    ! O primeiro passo é executar npm init -y.
    _ então há uma série de instalações.
    ! npm i --save-dev @babel/preset-env @babel/cli @babel/core 
    ! babel-loader webpack webpack-cli regenerator-runtime core-js@2
    @ É um comando, digitado em apenas uma linha, porém foi dividido para
    @ caber melhor nas notas

    _ Criar um arquivo na raiz com o nome:
    ! webpack.config.js
    @ deve ter o mesmo nome e extenção exatamente
    _ com o conteúdo

    -//?                    |  CÓDIGO  |      
    -//? 
    -//?     const path = require('path'); // CommonJS
    -//?     module.exports = {
    -//?         mode: 'production',
    -//?         entry: './src/index.js',
    -//?         output: {
    -//?             path: path.resolve(__dirname, 'public', 'assets', 'js'),
    -//?             filename: 'bundle.js'
    -//?         },
    -//?         module: {
    -//?             rules: [{
    -//?                 exclude: /node_modules/,
    -//?                 test: /\.js$/,
    -//?                 use: {
    -//?                     loader: 'babel-loader',
    -//?                     options: {
    -//?                         presets: ['@babel/env']
    -//?                     }
    -//?                 }
    -//?              }]
    -//?         },
    -//?         devtool: 'source-map'
    -//?     };
    -//? 

    ! deve ter o module.exports -> para então ser visível fora do arquivo
    _ a pasta src (source) -> é a pasta fonte
    ! comando para ativar o webpack -> "gera": "webpack -w"
    _ deve ser colocado do mesmo jeito do mostrado anteriormente, e o nome pode
    _ ser qualquer coisa

    _ se no arquivo de configuração do webpack o modo estiver como development
    _ o arquivo em modo normal (extenso), mas se o modo estiver como production
    _ o arquivo gerado será minificado, ganhando performance.

    _ (fragmento de código referente a modo):

    -//?         |  CÓDIGO  |       
    -//?                            
    -//?     module.exports = {     
    -//?     mode: 'production',    

*/


// qualquer código em javaScript
// # todo código será transpilado para o bundle
console.log('EIIIIIIIIIIIIIIIIIIIIIII');
