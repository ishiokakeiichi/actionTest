const assert = require("assert");
const fizzbuzz = require("../index.js");

describe("fizzbuzz", () => {
  it("returns FizzBuzz when value is divisible by 15", () => {
    assert(fizzbuzz(30) === "FizzBuzz");
  });
});
