const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}));
//! Só trata o conteúdo enviado no body por put e post se tiver o comando acima.


app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="post">
        Hello world!!!
        </br>
        <label>Nome: </label>
        <input type="text" name="nome">
        <button>Enviar</button>
        </form>

        <form action="/testes" method="get">
        <button>Testes</button>
        </form>
    `);
});
app.get('/testes/:idUsuario?', (req, res)=>{
    console.log(req.params);
    console.log(req.query);
    res.send(`Adicione algo na URL params  após testes,  exemplo : /testes/123
    <br>
    <br>
    o resultado aparecerá aqui --> ${req.params.idUsuario}
    <br>
    <br>
    <form action="/" method="get">
        <button>Voltar</button>
        </form>
    `)
})
app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`O nome que você enviou foi: ${req.body.nome}
    <br>
    <br>
    <form action="/" method="get">
        <button>Voltar</button>
        </form>
    `);
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('servidor executando na porta 3000');
});