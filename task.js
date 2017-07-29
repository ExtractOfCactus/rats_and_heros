var Task = function(description, difficulty, urgency, reward){
  this.description = description;
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.complete = false;
}

Task.prototype.setComplete = function() {
  this.complete = true;
};

module.exports = Task;