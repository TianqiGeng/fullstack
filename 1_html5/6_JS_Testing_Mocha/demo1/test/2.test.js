var multiply = require('../js/1.js');
var expect = require('chai').expect;
describe("ascy failed", function () {
    var a = false;
    beforeEach(function () {
        setTimeout(function () {
            a = true;

        }, 50);
    });
    it("should pass", function () {
        expect(a).to.be.equal(true);
    });
});
describe("ascy ok", function () {
    var a = false;
    beforeEach(function (done) {
        setTimeout(function () {
            a = true;
            done();
        }, 50);
    });
    it("should pass", function () {
        expect(a).to.be.equal(true);
    });
    console.log("输出");


});