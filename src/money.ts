import Expression from "./expression";
import Sum from "./sum";

export default class Money {
  constructor(
    public readonly amount: number,
    public readonly currency: string
  ) {}
  public times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.currency);
  }

  public static dollar(amount: number): Money {
    return new Money(amount, "USD");
  }

  public static franc(amount: number): Money {
    return new Money(amount, "CHF");
  }

  public plus(addend: Money): Expression {
    return new Sum(this, addend);
  }

  public reduce(to: string): Money {
    return this;
  }
}
