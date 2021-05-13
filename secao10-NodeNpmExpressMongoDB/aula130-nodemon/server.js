const express = require('express');
const app = express();

app.get('/contato', (req, res) => {
    res.send(`
    <form action="/contato" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    `);
});
app.post('/contato', (req, res) => {
    res.send(`Recebi o formulário`);
});
app.get('/', (req, res) => {
    res.send(`
        <form action="/contato" method="GET">
        Hello world!!!
        </br>
        
        <button>Contato</button>
    `);
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('servidor executando na porta 3000');
});