var assert = require("assert");
var Task = require("../task");

describe("Task", function() {
  var task;

  beforeEach(function() {
    task = new Task(3, "low", 50);
  })

  it("should have difficulty level", function() {
    assert.strictEqual(task.difficulty, 3);
  })

  it("should have urgency level", function() {
    assert.strictEqual(task.urgency, "low");
  })

  it("should have reward", function() {
    assert.strictEqual(task.reward, 50);
  })
})