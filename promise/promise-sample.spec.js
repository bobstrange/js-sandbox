const assert = require('assert');

describe('Promise Test', () => {
    it('should return a promise object', () => {
        const promise = Promise.resolve(1000);
        return promise.then((value) => {
            assert(value === 1000);
        });
    })
});
