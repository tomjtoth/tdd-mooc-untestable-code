import { describe, test } from "vitest";
import { expect } from "chai";
import { diceHandValue, diceRoll } from "../src/untestable2.mjs";

describe("Untestable 2: a dice game", () => {
  test("fn diceRoll returns between its min and max range", () => {
    const res = new Set();
    for (let i = 0; i < 1000; i++) {
      res.add(diceRoll());
    }

    // has all the values returned once out of 1000 tries 🤞
    for (let i = 1; i < 7; i++) {
      expect(res.has(i)).to.be.true;
    }

    expect(Math.min(...res.values())).to.equal(1);
    expect(Math.max(...res.values())).to.equal(6);
  });

  test("diceHandValue returns as expected", () => {
    expect(diceHandValue(1, 1)).to.equal(100 + 1);
    expect(diceHandValue(1, 6)).to.equal(6);
    expect(diceHandValue(2, 3)).to.equal(3);
  });
});
