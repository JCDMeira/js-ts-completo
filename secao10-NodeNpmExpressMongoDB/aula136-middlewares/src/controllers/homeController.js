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