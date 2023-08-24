const calculateNumber = require("./0-calcul.js");
const assert = require('assert');

describe('calculateNumber', () => {
    it('rounding of a', () => {
        assert.equal(calculateNumber(16.89, 2), 19);
        assert.equal(calculateNumber(1.5, 0), 2);
        assert.equal(calculateNumber(4.2, 2), 7);
    });

    it('rounding of b', () => {
        assert.equal(calculateNumber(3, 16.89), 20);
        assert.equal(calculateNumber(0, 1.5), 2);
        assert.equal(calculateNumber(3, 4.2), 7);
    });

    it('suming of a and b', () => {
        assert.equal(calculateNumber(16.89, 2.7), 20);
        assert.equal(calculateNumber(1.5, 0.5), 2);
        assert.equal(calculateNumber(4.2, 3.1), 8);
    });
});

