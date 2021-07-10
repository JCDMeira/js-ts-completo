//  * Aula 288 - Classes, métodos e atributos abstratos

/*
    _Nota_
    _ Se usa o recurso abstract para que se tenha um tipo na classe,
    _ e em todas as classes extendidas. Além de garantir que as classes
    _ extendidas tenham determinado método ou atributos.
*/

export abstract class Personagem {
  protected abstract emoji: string
  constructor(
      protected name: string,
      protected ataque: number,
      protected vida: number
  ){}

  atacar(personagem: Personagem): void {
      this.bordao();
      personagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number): void {
      this.vida -= forcaAtaque;
      console.log(`${this.name} sofreu ${forcaAtaque} de dano e agora tem ${this.vida} de pontos de vida`);
  }

    abstract bordao(): void
}

export class Guerreira extends Personagem {
  protected emoji = "\u{1F9DD}"
  bordao(): void {
      console.log(this.emoji + "Sofra criatura miserável");
  }
}
export class Monstro extends Personagem {
  protected emoji = "\u{1F9DF}"
  bordao(): void {
      console.log(this.emoji + "rghhhhh... tome humano");
  }
}

const guerreira = new Guerreira("Guerreira", 100, 1000);
const monstro = new Monstro("monstro", 87, 1000);

guerreira.atacar(monstro);
monstro.atacar(guerreira);
