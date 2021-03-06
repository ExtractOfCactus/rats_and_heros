var assert = require("assert");
var Task = require("../task");

describe("Task", function() {
  var task;

  beforeEach(function() {
    task = new Task("Slay Eugene, the hideous goblin child", 3, 4, 50, 120);
  })

  it("should have a description", function() {
    assert.strictEqual(task.description, "Slay Eugene, the hideous goblin child")
  })

  it("should have difficulty level", function() {
    assert.strictEqual(task.difficulty, 3);
  })

  it("should have urgency level", function() {
    assert.strictEqual(task.urgency, 4);
  })

  it("should have reward", function() {
    assert.strictEqual(task.reward, 50);
  })

  it("should have exp", function() {
    assert.strictEqual(task.exp, 120);
  })

  it("can be marked as complete", function() {
    task.setComplete();
    assert.strictEqual(task.complete, true);
  })
})