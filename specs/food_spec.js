var assert = require("assert");
var Food = require("../food");

describe("Food", function() {
  var food;

  beforeEach(function() {
    food = new Food("Chicken", 20);
  })

  it("should have name", function() {
    assert.strictEqual(food.name, "Chicken");
  })

  it("should have a replenishment value", function() {
    assert.strictEqual(food.replenish, 20);
  })

  it("should have default false poisoned boolean", function() {
    assert.strictEqual(food.poisoned, false);
  })
})