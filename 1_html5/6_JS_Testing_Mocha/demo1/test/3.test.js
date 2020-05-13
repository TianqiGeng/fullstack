var expect = require('chai').expect;
const fetch = require("node-fetch");


describe("HTTP ok", function () {
    it('HTTP', function () {
        return fetch('https://randomuser.me/api/?results=10/3')
            .then(function (res) {
                return res.json();
            }).then(function (json) {
                expect(json).to.be.an('object');
            });
    });
});

