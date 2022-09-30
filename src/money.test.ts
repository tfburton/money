import Money from "./money";

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

  it("should multiply dollars", () => {
    expect(Money.dollar(5).times(2)).toEqual(Money.dollar(10));
  });
  it("should multiply francs", () => {
    expect(Money.franc(3).times(2)).toEqual(Money.franc(6));
  });
});
