import { describe, test } from "vitest";
import { expect } from "chai";
import { daysUntilChristmas } from "../src/untestable1.mjs";

describe("Untestable 1: days until Christmas", () => {
  test("24.12 is 1 day to go", () => {
    const now = new Date("2020-12-24T18:00:00");
    const res = daysUntilChristmas(now);
    expect(res).to.be.a("number");
    expect(res).to.equal(1);
  });

  test("25.12 00:00-23:59 are both the same day (0 days away)", () => {
    const _0000 = new Date("2020-12-25T00:00:00");
    const res0000 = daysUntilChristmas(_0000);
    expect(res0000).to.equal(0);

    const _2359 = new Date("2020-12-25T23:59:59");
    const res2359 = daysUntilChristmas(_2359);
    expect(res2359).to.equal(0);
  });

  test("26.12 is 364 days to go", () => {
    const now = new Date("2020-12-26T00:00:00");
    const res = daysUntilChristmas(now);
    expect(res).to.equal(364);
  });

  test("in 26.12.2023 - 25.12.2024 29.2.2024 is accounted for (leap year)", () => {
    const now = new Date("2023-12-26T00:00:00");
    const res = daysUntilChristmas(now);
    expect(res).to.equal(365);
  });
});
