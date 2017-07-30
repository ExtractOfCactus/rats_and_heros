var assert = require("assert");
var Monster = require("../monster");
var Weapon = require("../weapon");

describe("Monster", function() {
  var weapon;
  var monster;

  beforeEach(function() {
    weapon = new Weapon("Bronze Shortsword", 10, false);
    monster = new Monster("Goblin", weapon, 50);
  })

  it("should have a type", function() {
    assert.strictEqual(monster.type, "Goblin");
  })
})