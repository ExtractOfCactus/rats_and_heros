var Food = function(name, replenish) {
  this.name = name;
  this.replenish = replenish;
  this.poisoned = false;
}

module.exports = Food;