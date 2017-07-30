var assert = require("assert");
var Hero = require("../hero");
var Task = require("../task");
var Food = require("../food");
var Rat = require("../rat");
var Weapon = require("../weapon");
var Monster = require("../monster");

describe("Hero", function() {
  var hero;
  var task1;
  var task2;
  var task3;
  var weapon1;
  var weapon2;
  var weapon3;
  var monster;

  beforeEach(function() {
    hero = new Hero("Glendar", 200, "Chicken");
    task1 = new Task("Dance", 6, 5, 75, 0);
    task2 = new Task("Win a race", 2, 3, 60, 50);
    task3 = new Task("Kill the King", 8, 2, 300, 400);
    weapon1 = new Weapon("Bronze Longsword", 20, false);
    weapon2 = new Weapon("Steel Dagger", 18, false);
    weapon3 = new Weapon("Maple Longbow", 15, true);
    monster = new Monster("Orc", weapon1, 50);
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

  it("starts without any weapons", function() {
    assert.strictEqual(hero.weapons.length, 0);
  })

  it("tasks list starts empty", function() {
    assert.strictEqual(hero.tasks.length, 0);
  })

  it("experience starts empty", function() {
    assert.strictEqual(hero.xp(), 0);
  })

  it("can add weapons", function() {
    hero.equipWeapon(weapon1);
    assert.strictEqual(hero.weapons.length, 1);
  })

  it("cannot add weapons if hands are full", function() {
    hero.equipWeapon(weapon1);
    hero.equipWeapon(weapon2);
    assert.strictEqual(hero.equipWeapon(weapon3), "Your hands are full!");
  })

  it("cannot add weapons if already holding a two handed weapon", function() {
    hero.equipWeapon(weapon3);
    assert.strictEqual(hero.equipWeapon(weapon1), "Your hands are full!");
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

  it("can eat poisoned food", function() {
    var food = new Food("Bread", 10);
    var rat = new Rat("Rizzo");
    rat.touch(food);
    hero.eat(food);
    assert.strictEqual(hero.health, 190);
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

  it("can sort tasks in order of given parameter(reward)", function() {
      hero.addTask(task1);
      hero.addTask(task2);
      hero.addTask(task3);
      hero.sortTasks("reward");
      assert.deepEqual(hero.tasks[0], task2);
    })

  it("can view tasks by completed or incompleted", function() {
    task2.setComplete();
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    assert.deepEqual(hero.viewTasks(true), [task2]);
    assert.deepEqual(hero.viewTasks(false), [task1, task3]);
  })

  it("can gain experience", function() {
    hero.addTask(task3);
    task3.setComplete();
    assert.strictEqual(hero.xp(), 400);
  })

  it("can attack monster", function() {
    hero.equipWeapon(weapon2);
    hero.attack(monster);
    assert.strictEqual(monster.health, 32);
  })

  it("can kill monster", function() {
    var weakMonster = new Monster("Goblin", weapon1, 15, 5);
    hero.equipWeapon(weapon2);
    assert.strictEqual(hero.attack(weakMonster), "The Goblin has been slain");
  })

  it("can can gain experience for slaying a monster", function() {
    var weakMonster = new Monster("Goblin", weapon1, 15, 5);
    hero.equipWeapon(weapon2);
    hero.attack(weakMonster);
    assert.deepEqual(hero.xp(), 50);
  })

})