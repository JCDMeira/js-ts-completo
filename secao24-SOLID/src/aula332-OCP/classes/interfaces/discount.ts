export abstract class Discount {
    abstract calculate(value: number): number
}

export class FiftyPercentDiscount extends Discount {
  private readonly discount = 0.5;
  calculate(price: number): number {
      const total = price - price * (this.discount);
      return +total.toFixed(2) ;
  }
}

export class TenPercentDiscount extends Discount {
  private readonly discount = 0.1;
  calculate(price: number): number {
      const total = price - price * (this.discount);
      return +total.toFixed(2) ;
  }
}

export class NoPercentDiscount extends Discount {
  private readonly discount = 0;
  calculate(price: number): number {
      const total = price - price * (this.discount);
      return +total.toFixed(2) ;
  }
}
