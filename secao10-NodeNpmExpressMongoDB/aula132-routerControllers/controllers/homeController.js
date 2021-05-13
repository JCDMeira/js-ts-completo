exports.paginaInicial = (req, res) =>{
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
}
exports.formulario = (req, res) =>{
        console.log(req.body);
        res.send(`O nome que você enviou foi: ${req.body.nome}
        <br>
        <br>
        <form action="/" method="get">
            <button>Voltar</button>
            </form>
        `);
    }