import { readFile } from "node:fs/promises";
import { parse } from "csv-parse/sync";

export function readCSV(filePath) {
  return readFile(filePath, { encoding: "utf8" });
}

export function parsePeopleCsv(csvData) {
  const records = parse(csvData, {
    skip_empty_lines: true,
    trim: true,
  });
  return records.map(([firstName, lastName, age, gender]) => {
    const person = {
      firstName,
      lastName,
      gender: gender.charAt(0).toLowerCase(),
    };
    if (age !== "") {
      person.age = parseInt(age);
    }
    return person;
  });
}
