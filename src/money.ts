import { Dollar, Franc } from "./types";

export default abstract class Money {
  amount: number;
  currency: string;
  times: (multiplier: number) => Money;

  public static dollar(amount: number): Money {
    return new Dollar(amount, "USD");
  }

  public static franc(amount: number): Money {
    return new Franc(amount, "CHF");
  }
}
