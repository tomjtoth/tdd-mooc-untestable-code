import { describe, test } from "vitest";
import { expect } from "chai";
import { diceHandValue, diceRoll } from "../src/testableRandom.mjs";

describe("Randomness: a dice game", () => {
  test("dice rolls are between 1 and 6", () => {
    const roll = diceRoll();
    expect(roll).to.greaterThan(0.9);
    expect(roll).to.lessThan(6.1);
  });

  test("one pair", () => {
    expect(diceHandValue(1, 1)).to.equal(101);
    expect(diceHandValue(6, 6)).to.equal(106);
  });

  test("high die", () => {
    expect(diceHandValue(1, 2)).to.equal(2);
    expect(diceHandValue(6, 4)).to.equal(6);
  });
});
