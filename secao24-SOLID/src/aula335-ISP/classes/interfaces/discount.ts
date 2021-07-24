export abstract class Discount {
  protected discount = 0;
  calculate(price: number): number {
      const total = price - price * (this.discount);
      return +total.toFixed(2) ;
  }
}

export class FiftyPercentDiscount extends Discount {
  protected readonly discount = 0.5;
}

export class TenPercentDiscount extends Discount {
  protected readonly discount = 0.1;
}

export class NoDiscount extends Discount {}
