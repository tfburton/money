import { Money } from "./types";

export default class Dollar implements Money {
  constructor(
    public readonly amount: number,
    private readonly _currency: string
  ) {}

  public times(multiplier: number): Money {
    return new Dollar(this.amount * multiplier, "USD");
  }
}
