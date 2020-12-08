//* Aula 93 - Exercício - Validando um CPF (algoritmo)

/*
    #Nota#
    
*/

//#Aviso# 705.484.450-52 070.987.720-03
/*
    _ 7x  0x 5x 4x 8x 4x 4x 5x 0x
    _ 10  9  8  7  6  5  4  3  2
    _ 70  0  40 28 48 20 16 15 0 = 237

    _ 11 - (237 % 11) = 5 (Primeiro dígito)
    _ Se o número digito for maior que 9, consideramos 0.

    _ 7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
    _ 11 10  9  8  7  6  5  4  3  2
    _ 77  0  45 32 56 24 20 20 0  10 = 284

    _ 11 - (284 % 11) = 2 (Primeiro dígito)
    _ Se o número digito for maior que 9, consideramos 0.
*/

function scope() {
    const form = document.querySelector('.form');
    const result = document.querySelector('.result');


    function handleSubmit(event) {
        event.preventDefault();

        //#Nota# Uma constructor function que retorna um objeto com o cpf sem . e -;
        function ValidaCpf(cpfInput) {
            Object.defineProperty(this, 'cpfLimpo', {
                enumerable: true,
                get: function () {
                    return cpfInput.replace(/\D+/g, '');
                }
            });
        }

        //! Agora todos os métodos serão usados como prototypes. Pois o foi criado usando constructor function. Portanto convém de centralizar.

        //_ método de validação
        ValidaCpf.prototype.valida = function () {
            //_ conferir se o cpf é vazio e tem a quantidade certa de números.
            if (typeof this.cpfLimpo === 'undefined') return false;
            if (this.cpfLimpo.length !== 11) return false;

            //_ checar sequencia.
            if (this.isSequencia()) return 'CPF é inválido';

            //_ criar os digistos de comparação
            const cpfParcial = this.cpfLimpo.slice(0, -2);
            const digito1 = this.criarDigito(cpfParcial);
            const digito2 = this.criarDigito(cpfParcial + digito1);

            //_ comparar os cpfs.
            const cpfFinal = cpfParcial + digito1 + digito2;
            return cpfFinal === this.cpfLimpo ? 'CPF é válido' : 'CPF é inválido';
        }

        //_ Método para montar os dígitos.
        ValidaCpf.prototype.criarDigito = function (cpfParcial1) {
            const cpfArray = Array.from(cpfParcial1);
            const total = cpfArray.reduce((acc, value, index) => {
                acc += ((cpfArray.length + 1 - index) * value);
                return acc;
            }, 0);

            const digito = 11 - (total % 11);
            return digito >= 9 ? '0' : String(digito);
        }

        //_ checar se é uma sequência
        ValidaCpf.prototype.isSequencia = function () {
            const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
            return sequencia === this.cpfLimpo;
        };

        //_ Captura o input de classe cpf 
        const inputCpf = document.querySelector('.cpf')

        //_ Extraí o valor do input
        const cpfValor = inputCpf.value;

        const cpf = new ValidaCpf(cpfValor);
        const isValido = cpf.valida();

        result.innerHTML = `<p> ${isValido} </p>`

    }

    form.addEventListener('submit', handleSubmit);
}

scope();