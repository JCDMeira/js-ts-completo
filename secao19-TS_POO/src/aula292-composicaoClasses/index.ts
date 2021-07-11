//  * Aula 292 - Composição entre classes

/*
    _Nota_
    _ um objeto (classe) tem outro como parte dele.
*/

export class Carro {
  private readonly motor = new Motor();

  ligar(): void {
      this.motor.ligar();
  }

  acelerar(): void {
      this.motor.acelerar();
  }

  parar(): void {
      this.motor.parar();
  }
  desligar(): void {
      this.motor.desligar();
  }
}

export class Motor {
    ligar(): void {
        console.log("Motor está ligado...");
    }

    acelerar(): void {
        console.log("Motor está acelerando...");
    }

    parar(): void {
        console.log("Motor está parando...");
    }
    desligar(): void {
        console.log("Motor está desligado...");
    }
}

const carro = new Carro();
carro.ligar();
