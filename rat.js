var Rat = function(name) {
  this.name = name
}

Rat.prototype.touch = function(food) {
  food.setPoisoned();
};

module.exports = Rat;