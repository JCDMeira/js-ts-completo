//* Aula 106 - usando classes (validando CPF)

// 705.484.450-52 e 070.987.720-03

class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    eSequencia() {
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;
    }

    geraNovoCpf() {
        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.geraDigito(cpfParcial);
        const digito2 = ValidaCPF.geraDigito(cpfParcial + digito1);
        this.novoCPF = cpfParcial + digito1 + digito2;
    }

    static geraDigito(cpfParcial) {
        let total = 0;
        let reverso = cpfParcial.length + 1;

        for (let stringNumerica of cpfParcial) {
            total += reverso * Number(stringNumerica);
            reverso--;
        }
        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }

    valida() {
        if (!this.cpfLimpo) return false;
        if (typeof this.cpfLimpo !== 'string') return false;
        if (this.cpfLimpo.length !== 11) return false
        if (this.eSequencia()) return false;
        if (!this.geraNovoCpf());

        return this.novoCPF === this.cpfLimpo;
    }
}

const validacpf = new ValidaCPF('070.987.720-03');   //? cpf válido
// const validacpf = new ValidaCPF('070.987.720-02');      //? cpf com dígitos inválidos
// const validacpf = new ValidaCPF('070.987.72-02');      //? cpf com menos dígitos 
// const validacpf = new ValidaCPF('999.999.999-99');   //? cpf com sequência

if (validacpf.valida()) {
    console.log('CPF válido');
} else {
    console.log('CPF inválido');
}

