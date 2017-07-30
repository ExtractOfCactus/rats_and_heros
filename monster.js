var Monster = function(type, weapon, health) {
  this.type = type;
  this.weapon = weapon;
  this.health = health;
}

Monster.prototype.attack = function(hero) {
  hero.health -= this.weapon.damage
};

module.exports = Monster;