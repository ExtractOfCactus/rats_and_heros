var assert = require("assert");
var Armour = require("../armour");

describe("Armour", function() {
  var helmet1;
  var helmet2;

  beforeEach(function() {
    helmet1 = new Armour("Head", 10);
    helmet2 = new Armour("Head", 15);
  })

  it("should have an assigned body part", function() {
    assert.strictEqual(helmet1.bodyPart, "Head");
  })

  it("should have a defense value", function() {
    assert.strictEqual(helmet2.defense, 15);
  })
})