import Expression from "./expression";
import Money from "./money";

export default class Bank {
  reduce(source: Expression, to: string): Money {
    return source.reduce(to);
  }
}
