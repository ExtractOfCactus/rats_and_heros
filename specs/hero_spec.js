var assert = require("assert");
var Hero = require("../hero");
var Task = require("../task");
var Food = require("../food");

describe("Hero", function() {
  var hero;
  var task1;
  var task2;
  var task3;

  beforeEach(function() {
    hero = new Hero("Glendar", 200, "Chicken");
    task1 = new Task(6, 5, 50);
    task2 = new Task(2, 3, 75);
    task3 = new Task(8, 2, 300);
  })

  it("should have a name", function() {
    assert.strictEqual(hero.name, "Glendar");
  })

  it("should have a health", function() {
    assert.strictEqual(hero.health, 200);
  })

  it("should have favourite food", function() {
    assert.strictEqual(hero.favFood, "Chicken");
  })

  it("can say own name", function() {
    assert.strictEqual(hero.sayName(), "I am the mighty Glendar!");
  })

  it("tasks list starts empty", function() {
    assert.strictEqual(hero.tasks.length, 0);
  })

  it("can add tasks to tasks list", function() {
    var task = new Task(3, "low", 50);
    hero.addTask(task);
    assert.strictEqual(hero.tasks.length, 1);
  })

  it("can eat food", function() {
    var food = new Food("Bread", 10);
    hero.eat(food);
    assert.strictEqual(hero.health, 210);
  })

  it("can eat favourite food", function() {
    var food = new Food("Chicken", 20);
    hero.eat(food);
    assert.strictEqual(hero.health, 230);
  })

  it("can sort tasks in order of given parameter(difficulty)", function() {
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    hero.sortTasks("difficulty");
    assert.deepEqual(hero.tasks[0], task2);
  })

  it("can sort tasks in order of given parameter(urgency)", function() {
      hero.addTask(task1);
      hero.addTask(task2);
      hero.addTask(task3);
      hero.sortTasks("urgency");
      assert.deepEqual(hero.tasks[0], task3);
    })

})