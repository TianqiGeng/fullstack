var multiply = require('../js/1.js');
var expect = require('chai').expect;

describe('乘法', function () {
    it('1 乘 100应该等于 100  ', function () {
        expect(multiply(1)).to.be.equal(90);
    });
    it('0 乘 100应该等于 0', function () {
        expect(multiply(0)).to.be.equal(0);
    });
});


