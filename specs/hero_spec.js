var assert = require("assert");
var Hero = require("../hero");

describe("Hero", function() {
  var hero;

  beforeEach(function() {
    hero = new Hero("Glendar", 200, "chicken");
  })

  it("should have a name", function() {
    assert.strictEqual(hero.name, "Glendar");
  })
})