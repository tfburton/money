import Money from "./money";

export default class Dollar implements Money {
  constructor(
    public readonly amount: number,
    public readonly currency: string
  ) {}

  public times(multiplier: number): Dollar {
    return Money.dollar(this.amount * multiplier);
  }
}
