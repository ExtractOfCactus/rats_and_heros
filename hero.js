var _ = require("lodash");

var Hero = function(name, health, favFood) {
  this.name = name;
  this.health = health;
  this.favFood = favFood;
  this.tasks = [];
  this.xp = 0;
}

Hero.prototype.sayName = function() {
  return "I am the mighty " + this.name + "!";
};

Hero.prototype.addTask = function(task) {
  this.tasks.push(task);
};

Hero.prototype.eat = function(food) {
  this.favFood === food.name ? this.health += (food.replenish * 1.5) : this.health += food.replenish;
};

Hero.prototype.sortTasks = function(param) {
  this.tasks = _.sortBy(this.tasks, function(task) {
    return task[param]
  });
}

Hero.prototype.viewTasks = function(param) {
  var resultArray = _.filter(this.tasks, function(task) {
    return task.complete === param;
  }) 
  return resultArray;
}

module.exports = Hero;