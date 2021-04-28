//* Aula 99 - Getters e Setters

/*
    #Nota#
*/

const _velocidade = Symbol('velocidade');
class Carro{
    constructor(nome){
        this.nome=nome;
        this[_velocidade]=0;
    }
    get velocidade(){
        return this[_velocidade]
    }
    set velocidade(valor){
        if(typeof valor !== 'number') return
        if(valor >= 100 || valor <=0) return
        this[_velocidade] = valor;

    }

    acelerar(){
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }
    freiar(){
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca');

// for(let i=0; i<=200;i++){
//     c1.acelerar();
// }

//_ Devido ao seter o comando abaixo não é executado, por não passar pela descrição de condições
// c1.velocidade = 10000
console.log(c1);

//_ Já o comando abaixo se enquadra, então o valor é setado
c1.velocidade = 99
console.log(c1);