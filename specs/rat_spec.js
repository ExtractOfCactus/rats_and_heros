var assert = require("assert");
var Rat = require("../rat");
var Food = require("../food");

describe("Rat", function() {
  var rat;
  var food;

  beforeEach(function() {
    rat = new Rat("Rizzo");
    food = new Food("Chicken", 20);
  })
})