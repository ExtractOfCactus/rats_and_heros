var assert = require("assert");
var Weapon = require("../weapon");

describe("Weapon", function() {
  var weapon;

  beforeEach(function() {
    weapon = new Weapon("Bronze Longsword", 20);
  })

  it("should have a name", function() {
    assert.strictEqual(weapon.name, "Bronze Longsword");
  })
})