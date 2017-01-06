// testing code goes here

'use strict'

var chai = require('jasmine');
// var assert = chai.assert;
// var expect = chai.expect;
// var should = chai.should();
var myApp = require('../app/library.js');

describe("Test for proper arithmetic functionality", function() {
  it("should return 2 as average for 1, 2, 3", function() {
    expect((myApp.computeAverage(1,2,3))).toBe(2);
  })
  it("should return 5 as average for 3, 7, 5", function() {
    expect(myApp.computeAverage(3, 7, 5)).toBe(5);
  })
  it("should return 120 as factorial for 5", function() {
    expect(myApp.computeFactorial(5)).toBe(120);
  })
  it("should return 20 as Big in [20,19,7,7]", function(){
    expect(myApp.getLargest([20,19,7,7])).toBe(20);
  })
})


describe("Test for temperature conversion functionality", function() {
  it("should return X for Celcius value Y", function() {
    expect(myApp.convertTempCtoF(40)).toBe(104);
  })
  it("should return X for Celcius value Y", function() {
    expect(myApp.convertTempCtoF(60)).toBe(140);
  })
  it("should return Y for Fahrenheit value X", function() {
    expect(myApp.convertTempFtoC(140)).toBe(60);
  })
  it("should return Y for Fahrenheit value X", function() {
    expect(myApp.convertTempFtoC(104)).toBe(40);
  })
})
