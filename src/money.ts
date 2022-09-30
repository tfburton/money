export default interface Money {
  amount: number;
  times: (multiplier: number) => Money;
}
