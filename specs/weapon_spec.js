var assert = require("assert");
var Weapon = require("../weapon");

describe("Weapon", function() {
  var weapon;

  beforeEach(function() {
    weapon = new Weapon("Bronze Longsword", 20, false);
  })

  it("should have a name", function() {
    assert.strictEqual(weapon.name, "Bronze Longsword");
  })

  it("should have damage", function() {
    assert.strictEqual(weapon.damage, 20);
  })

  it("should have two handed boolean check", function() {
    assert.strictEqual(weapon.twoHanded, false);
  })
})