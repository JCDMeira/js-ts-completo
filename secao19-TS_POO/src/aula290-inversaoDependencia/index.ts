//  * Aula 290 - Inversão de dependência (dependency Inversion)

/*
    _Nota_
    _ faz a classe não apontar diretamente para outra classe concreta.
    _ mas sim para uma classe abstrata, e essa será pouco alterada, ou
    _ se quer será alterada. Evita mudanças diretas e quebras de outras
    _ partes do código
*/

export class Escritor {
  private _ferramenta: Ferramenta | null = null;

  constructor( private _nome: string) {}

  get nome(): string {
      return this._nome;
  }

  set ferramenta(ferramenta: Ferramenta | null) {
      this._ferramenta = ferramenta;
  }

  get ferramenta(): Ferramenta | null {
      if(this._ferramenta) return this._ferramenta;
      return null;
  }

  escrever(): void {
      if(this.ferramenta === null){
          console.log("Não posso escrever sem ferramenta...");
          return;
      }
      this.ferramenta.escrever();
  }
}

export abstract class Ferramenta {
    constructor(private _nome: string) {}
  abstract escrever(): void;

  get nome(): string {
      return this._nome;
  }
}

export class Caneta extends Ferramenta {
    escrever(): void {
        console.log(`${this.nome} está escrevendo...`);
    }
}

export class MaquinaEscrever extends Ferramenta {
    escrever(): void {
        console.log(`${this.nome} está digitando...`);
    }
}

const escritor = new Escritor("Jean");
const caneta = new Caneta("Bic");
const maquinaEscrever = new MaquinaEscrever("maq");

console.log(escritor.nome);
console.log(caneta.nome);
console.log(maquinaEscrever.nome);
escritor.escrever();
escritor.ferramenta = caneta;
escritor.escrever();
escritor.ferramenta = maquinaEscrever;
escritor.escrever();
escritor.ferramenta = null;
escritor.escrever();
