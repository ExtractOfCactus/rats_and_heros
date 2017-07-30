var assert = require("assert");
var Monster = require("../monster");
var Weapon = require("../weapon");
var Hero = require("../hero");

describe("Monster", function() {
  var weapon1;
  var monster;
  var hero;

  beforeEach(function() {
    weapon1 = new Weapon("Bronze Shortsword", 10, false);
    monster = new Monster("Goblin", weapon1, 50, 5);
    hero = new Hero("Glendar", 200, "Chicken");
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

  it("can attack hero", function() {
    monster.attack(hero);
    assert.strictEqual(hero.health, 190);
  })

  it("can be killed", function() {
    var weakMonster = new Monster("Goblin", weapon1, 5, 5);
    hero.equipWeapon(weapon1);
    hero.attack(weakMonster);
    assert.strictEqual(weakMonster.health, 0);
  })

})