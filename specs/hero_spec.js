var assert = require("assert");
var Hero = require("../hero");

describe("Hero", function() {
  var hero;

  beforeEach(function() {
    hero = new Hero("Glendar", 200, "Chicken");
  })

  it("should have a name", function() {
    assert.strictEqual(hero.name, "Glendar");
  })

  it("should have a health", function() {
    assert.strictEqual(hero.health, 200);
  })

  it("should have favourite food", function() {
    assert.strictEqual(hero.favFood, "Chicken");
  })
})