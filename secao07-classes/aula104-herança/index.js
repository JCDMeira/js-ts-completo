//* Aula 104 - Herança com classes

/*
    #Nota#
*/
class Dispositivo{
    
constructor(nome){
    this.nome = nome;
    this.ligado = false;
}
ligar(){
    if(this.ligado){
        console.log(this.nome + ' já ligado');
        return
    }
    this.ligado= true;
}

desligar(){
    if(!this.ligado){
        console.log(this.nome + ' já desligado');
        return
    }
    this.ligado = false;
}
}

const d1 = new Dispositivo('smartphone');
console.log(d1)
d1.ligar();
console.log(d1)

d1.ligar();
d1.desligar();

console.log(d1)

d1.desligar();

class smartphone extends Dispositivo{
    //_ Já faz com que a classe smartphone tenha tudo que o dispositivo tenha.
    constructor(nome, cor, modelo){
        
         super(nome); //_ chamar o construtor pai

        this.cor=cor;
        this.modelo=modelo;
    }
}

const s1 = new smartphone('Samsung', 'preto', 'galaxy s10')
console.log(s1);
