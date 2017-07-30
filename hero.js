var _ = require("lodash");

var Hero = function(name, health, favFood) {
  this.name = name;
  this.health = health;
  this.favFood = favFood;
  this.weapons = [];
  this.tasks = [];
  this.xp = function() {
    var resultXp = 0;
    for (var task of this.tasks) {
      if (task.complete) {
        resultXp += task.exp;
      }
    }
    return resultXp;
  }
}

Hero.prototype.sayName = function() {
  return "I am the mighty " + this.name + "!";
};

Hero.prototype.checkTwoHanded = function() {
  for (var item of this.weapons) {
    if(item.twoHanded) {
      return true;
    }
  }
};

Hero.prototype.fullHands = function() {
  return "Your hands are full!"
};

Hero.prototype.equipWeapon = function(weapon) {
  if (this.weapons.length < 2 && !(this.checkTwoHanded())) {
    this.weapons.push(weapon);
  }
  else {
    return this.fullHands();
  }
};

Hero.prototype.addTask = function(task) {
  this.tasks.push(task);
};

Hero.prototype.eat = function(food) {
  if (food.poisoned) {
    this.health -= food.replenish;
  }
  else {
    this.favFood === food.name ? this.health += (food.replenish * 1.5) : this.health += food.replenish;
  }
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

Hero.prototype.attack = function(monster) {
  var totalDamage = 0;
  for (var weapon of this.weapons) {
    totalDamage += weapon.damage;
  }
  monster.health -= totalDamage;
};


module.exports = Hero;