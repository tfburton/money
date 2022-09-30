import Money from "./money";

export default class Franc implements Money {
  constructor(
    public readonly amount: number,
    public readonly currency: string
  ) {}
  public times(multiplier: number): Franc {
    return Money.franc(this.amount * multiplier);
  }
}
