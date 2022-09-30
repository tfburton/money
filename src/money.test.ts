import Bank from "./bank";
import Expression from "./expression";
import Money from "./money";
import Sum from "./sum";

describe("dollar", () => {
  let classUnderTest: Money;
  let amount: number;

  beforeEach(() => {
    amount = 12;
    classUnderTest = Money.dollar(amount);
  });

  it("should create", () => {
    expect(classUnderTest).toBeDefined();
  });

  describe("money equality", () => {
    it("should compare dollars to dollars", () => {
      expect(Money.dollar(5)).toEqual(Money.dollar(5));
    });
    it("should not compare dollars to francs", () => {
      expect(Money.dollar(4)).not.toEqual(Money.franc(5));
    });
    it("should compare unequal dollars", () => {
      expect(Money.dollar(4)).not.toEqual(Money.dollar(5));
    });
    it("should compare francs", () => {
      expect(Money.franc(4)).toEqual(Money.franc(4));
    });
    it("should compare unequal francs", () => {
      expect(Money.franc(1)).not.toEqual(Money.franc(4));
    });
  });

  describe("multiplication", () => {
    it("should multiply dollars", () => {
      expect(Money.dollar(5).times(2)).toEqual(Money.dollar(10));
    });
    it("should multiply francs", () => {
      expect(Money.franc(3).times(2)).toEqual(Money.franc(6));
    });
  });

  describe("addition", () => {
    it("should do simple addition", () => {
      const five: Money = Money.dollar(5);
      const sum: Expression = five.plus(five);
      const bank: Bank = new Bank();
      const reduced: Money | undefined = bank.reduce(sum, "USD");

      expect(five).toEqual(sum.augend);
      expect(five).toEqual(sum.addend);

      expect(Money.dollar(10)).toEqual(reduced);
    });

    it("should reduce money", () => {
      const sum = new Sum(Money.dollar(3), Money.dollar(4));
      const bank = new Bank();

      const result = bank.reduce(sum, "USD");

      expect(Money.dollar(7)).toEqual(result);
    });
  });
});
