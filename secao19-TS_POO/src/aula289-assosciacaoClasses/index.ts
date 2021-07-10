//  * Aula 289 - Associação entre classes

/*
    _Nota_
    _ Associação é a ligação mais fraca entre duas classes,
    _ nela uma classe usa a outra para realizar alguma ação,
    _ mas elas não estão diretamente conectadas, não havendo
    _ dependência de nenhuma delas.
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
