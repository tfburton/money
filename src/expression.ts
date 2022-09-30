import Money from "./money";

export default interface Expression {
  augend: Money;
  addend: Money;
  reduce: (to: string) => Money;
}
