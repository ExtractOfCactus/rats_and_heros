var Monster = function(type, weapon, health, level) {
  this.type = type;
  this.weapon = weapon;
  this.health = health;
  this.level = level;
}

Monster.prototype.attack = function(hero) {
  var totalDamage = (this.weapon.damage - hero.damageReduction());
  if (totalDamage < 0) {
    totalDamage = 0;
  }
  hero.health -= totalDamage;
};

module.exports = Monster;