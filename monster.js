var Monster = function(type, weapon, health, level) {
  this.type = type;
  this.weapon = weapon;
  this.health = health;
  this.level = level;
}

Monster.prototype.attack = function(hero) {
  hero.health -= this.weapon.damage
};

module.exports = Monster;