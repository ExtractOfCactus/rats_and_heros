var assert = require("assert");
var Monster = require("../monster");
var Weapon = require("../weapon");

describe("Monster", function() {
  var weapon1;
  var monster;

  beforeEach(function() {
    weapon1 = new Weapon("Bronze Shortsword", 10, false);
    monster = new Monster("Goblin", weapon1, 50);
  })

  it("should have a type", function() {
    assert.strictEqual(monster.type, "Goblin");
  })

  it("should have a weapon", function() {
    assert.deepEqual(monster.weapon, weapon1)
  })

  it("should have health", function() {
    assert.strictEqual(monster.health, 50);
  })
})