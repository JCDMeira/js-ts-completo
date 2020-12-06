//#Aviso# 705.484.450-52 070.987.720-03

//#Nota# Uma constructor function que retorna um objeto com o cpf sem . e -;
function ValidaCpf(cpfInput){
    Object.defineProperty(this, 'cpfLimpo',{
        enumerable: true,
        get: function(){
            return cpfInput.replace(/\D+/g, '');
        } 
    });
}

//! Agora todos os métodos serão usados como prototypes. Pois o foi criado usando constructor function. Portanto convém de centralizar.

//_ método de validação
ValidaCpf.prototype.valida = function(){
    //_ conferir se o cpf é vazio e tem a quantidade certa de números.
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11  ) return false;

    //_ checar sequencia.
    if(this.isSequencia()) return 'CPF é inválido';

    //_ criar os digistos de comparação
    const cpfParcial = this.cpfLimpo.slice(0,-2);
    const digito1 = this.criarDigito(cpfParcial);
    const digito2 = this.criarDigito(cpfParcial + digito1);

    //_ comparar os cpfs.
    const cpfFinal = cpfParcial + digito1 + digito2;
    return cpfFinal === this.cpfLimpo ? 'CPF é válido' : 'CPF é inválido';
}

//_ Método para montar os dígitos.
ValidaCpf.prototype.criarDigito = function(cpfParcial1){
    const cpfArray = Array.from(cpfParcial1);
    const total = cpfArray.reduce((acc, value, index)=>{
        acc += ((cpfArray.length + 1 - index) * value);
        return acc;
    }, 0);

    const digito = 11 - (total % 11);
    return digito >= 9 ? '0' : String(digito);
}

//_ checar se é uma sequência
ValidaCpf.prototype.isSequencia = function(){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
};

const cpf = new ValidaCpf('070.987.720-03');
const isValido = cpf.valida();

console.log(isValido);
