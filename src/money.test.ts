import Money from "./money";
import { Dollar, Franc } from "./types";

describe("dollar", () => {
  let classUnderTest: Money;
  let amount: number;

  beforeEach(() => {
    amount = 12;
    classUnderTest = new Dollar(amount, "USD");
  });

  it("should create", () => {
    expect(classUnderTest).toBeDefined();
  });

  it("should compare equality", () => {
    expect(new Dollar(5, "USD")).toEqual(new Dollar(5, "USD"));
    expect(new Dollar(4, "USD")).not.toEqual(new Dollar(5, "USD"));
    expect(new Dollar(4, "USD")).not.toEqual(new Franc(5, "CHF"));
    expect(new Dollar(4, "USD")).not.toEqual(new Franc(4, "CHF"));
    expect(new Franc(4, "CHF")).toEqual(new Franc(4, "CHF"));
  });

  it("should multiply", () => {
    expect(new Dollar(5, "USD").times(2)).toEqual(new Dollar(10, "USD"));
    expect(new Franc(3, "CHF").times(2)).toEqual(new Franc(6, "CHF"));
  });
});
