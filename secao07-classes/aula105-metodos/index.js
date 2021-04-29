//* Aula 105 - Métodos de instância e estáticos

/*
    #Nota#
        _ métodos estáticos basicamente são funções normais que estão dentro 
        _ de sua classe. E não estão acessíveis as instancias da classe.
        _ Já métodos de instância são acessíveis as instâncias criadas a partir 
        _ da classe, e também consegue ver os dados do construtor da classe.
        ! Os métodos estáticos não usam o new para chamar, e por isso o 
        ! construtor não é chamado.
        _ por isso os dados disponíveis no construtor não são acessáveis pela
        _ função estática.
        ! em funções estáticas o this já aponta para a classe.
*/

class ControleRemoto{
    constructor(tv){
        this.tv=tv;
        this.volume = 0;

    }

    //_ Método de instância
    aumentarVolume(){
        this.volume += 2;
    }
    diminuirVolume(){
        this.volume -= 2;
    }

    //_Método estático
    static trocaPilha(){
        console.log('vou trocar');
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);

ControleRemoto.trocaPilha();
