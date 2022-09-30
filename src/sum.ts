import Expression from "./expression";
import Money from "./money";

export default class Sum implements Expression {
  constructor(public readonly augend: Money, public readonly addend: Money) {}
  reduce(to: string): Money {
    return new Money(this.augend.amount + this.addend.amount, to);
  }
}
