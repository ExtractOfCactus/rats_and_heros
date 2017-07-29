var Task = function(description, difficulty, urgency, reward, exp){
  this.description = description;
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.exp = exp;
  this.complete = false;
}

Task.prototype.setComplete = function() {
  this.complete = true;
};

module.exports = Task;