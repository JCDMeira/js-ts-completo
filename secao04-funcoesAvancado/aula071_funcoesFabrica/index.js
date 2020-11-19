//* Aula 71 - Funções fábrica (factory functions)

function criaPessoa(nome, sobrenome, altura, peso){
    return{
        nome,
        sobrenome,
        //getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        //setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        fala(assunto){
            return `${this.nome} está falando sobre ${assunto}`
        },
        altura,
        peso,
        get imc(){
            const indice = this.peso/(this.altura**2);
            return indice.toFixed(2);
        },
    };
}

const p1 = criaPessoa('Jean', 'Meira', '1.72', '60');
console.log(p1.fala('Js'));
console.log(p1.imc);
p1.nomeCompleto = 'Jean Carlos De Meira' //? com o setter podesse alterar diretamente na chave.
console.log(p1.nomeCompleto);
/*
    #Nota#
    _ o this referência quem chamou a função,
    _ no contexto acima o this.nome é quase o mesmo que p1.nome
    _ colocar o get imc(), faz parecer que ele é um atributo normal.
    _ o get vem de getter e set ver sde setter.
    _ Factory function criam e retorna os objetos 
    _ isso permite diminuir o código, 
*/