// const HomeModel = require('../models/HomeModel');

// HomeModel.create({
//     titulo: 'Um título de testes',
//     descricao: 'Uma descrição de testes'
// })
//     .then(dados => console.log(dados))
//     .catch(e => console.log(e));

// HomeModel.find()
//     .then(dados => console.log(dados))
//     .catch(e => console.log(e));

/*
    _nota_
    _ O que for adicionado ao session (cookies) ficara pelo tempo que 
    _ for adicionado em configurações. Após iniciar o usuário com um 
    _ valor, mesmo ao comentar o mesmo o console.log ainda terá acesso
    _ ao conteúdo.

    _ as flash messagens ficam na memória após serem criadas, mas são
    _ apagadas assim que usadas/chamadas.
*/

exports.paginaInicial = (req, res, next) =>{
    // req.session.usuario = {nome:"jean", logado:true}
    // console.log(req.session.usuario)
    // req.flash('info', 'Olá mundo')
    // req.flash('error', 'Olá')
    // req.flash('success', 'só mundo')
    // console.log(req.flash('error'),req.flash('success'),req.flash('info') );
    res.render('index');
}
exports.formulario = (req, res, next) =>{
        console.log(req.body);
        res.send(`O nome que você enviou foi: ${req.body.cliente}
        <br>
        <br>
        <form action="/" method="get">
            <button>Voltar</button>
            </form>
        `);
    }
    