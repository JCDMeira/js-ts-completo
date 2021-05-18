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

exports.paginaInicial = (req, res, next) =>{
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
    