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
})