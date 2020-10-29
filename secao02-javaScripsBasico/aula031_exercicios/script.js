function meuEscopo(){
    const form = document.querySelector('.form');   // seleciona pela classe
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    // form.onsubmit = function(evento){
    //      evento.preventDefault();
    //      console.log('enviado');
    // };
    function recebeEventoForm(evento){
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,
        })
        console.log(pessoas)
        
        resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} ${peso.value} ${altura.value} </p>`
        
    }

    form.addEventListener('submit',recebeEventoForm); //forma mais nova de prevenir recarregar página
}
meuEscopo();