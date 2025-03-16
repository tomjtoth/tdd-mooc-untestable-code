import { describe, test } from "vitest";
import { expect } from "chai";
import { parsePeopleCsv, readCSV } from "../src/untestable3.mjs";
import { writeFileSync } from "fs";

describe("Untestable 3: CSV file parsing", () => {
  test("the separated file reading function works", async () => {
    const testString = "qwe,asd,yxc,åäö";
    writeFileSync("test.csv", testString);
    expect(await readCSV("test.csv")).to.equal(testString);
  });

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
