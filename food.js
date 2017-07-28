var Food = function(name, replenish) {
  this.name = name;
  this.replenish = replenish;
  this.poisoned = false;
}

Food.prototype.setPoisoned = function() {
  this.poisoned = true;
};

module.exports = Food;