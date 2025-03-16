import { beforeEach, describe, test } from "vitest";
import { expect } from "chai";
import { parsePeopleCsv } from "../src/untestable3.mjs";
import { writeFileSync } from "fs";

// example input:
// Loid,Forger,,Male
// Anya,Forger,6,Female
// Yor,Forger,27,Female

describe("Untestable 3: CSV file parsing", () => {
  test("parsePeopleCSV", () => {
    expect(
      parsePeopleCsv(`Loid,Forger,,Male
      Anya,Forger,6,Female
      Yor,Forger,27,Female`),
    ).to.deep.equal([
      {
        firstName: "Loid",
        gender: "m",
        lastName: "Forger",
      },
      {
        age: 6,
        firstName: "Anya",
        gender: "f",
        lastName: "Forger",
      },
      {
        age: 27,
        firstName: "Yor",
        gender: "f",
        lastName: "Forger",
      },
    ]);
  });
});
