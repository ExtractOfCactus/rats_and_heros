var Hero = function(name, health, favFood) {
  this.name = name;
  this.health = health;
  this.favFood = favFood;
  this.tasks = [];
}

Hero.prototype.sayName = function() {
  return "I am the mighty " + this.name + "!";
};

module.exports = Hero;