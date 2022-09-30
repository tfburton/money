import { Money } from "./types";

export default class Franc implements Money {
  constructor(
    public readonly amount: number,
    private readonly _currency: string
  ) {}
  public times(multiplier: number): Money {
    return new Franc(this.amount * multiplier, "CHF");
  }
}
