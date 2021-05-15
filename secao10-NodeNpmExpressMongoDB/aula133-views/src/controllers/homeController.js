exports.paginaInicial = (req, res) =>{
    res.render('index');
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