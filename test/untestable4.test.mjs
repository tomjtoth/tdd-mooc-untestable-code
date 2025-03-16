import { describe, test } from "vitest";
import { expect } from "chai";
import argon2 from "@node-rs/argon2";

import { PasswordService } from "../src/untestable4.mjs";

describe.sequential("Untestable 4: enterprise application", () => {
  const service = new PasswordService();

  test("retrieving non-existent user results in null", async () => {
    expect(await service.users.getById(999)).to.be.null;
  });

  test("user can be saved and retrieved by ID", async () => {
    const user = { userId: 11, passwordHash: argon2.hashSync("password1") };
    await service.users.save(user);

    const saved = await service.users.getById(11);

    expect(saved).to.deep.equal(user);
  });

  test("existing user can change password", async () => {
    await service.changePassword(11, "password1", "password2");

    const modified = await service.users.getById(11);

    expect(argon2.verifySync(modified.passwordHash, "password2")).to.be.true;
  });

  test("non-existing user can *NOT* change password", async () => {
    try {
      await service.changePassword(999, "password1", "password2");
      throw new Error("Expected an error but none was thrown");
    } catch (error) {
      expect(error.message).to.equal("user does not exist");
    }
  });
});
