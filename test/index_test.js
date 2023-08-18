var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('returns 120 when padding 5', () => {
      const inputNum = 5;
      const expected = 120;

      const result = Calculate.factorial(inputNum);

      assert.strictEqual(result, expected)
    });
    it('returns 6 when padding 3', () => {
      const inputNum = 3;
      const expected = 6;

      const result = Calculate.factorial(inputNum);

      assert.strictEqual(result, expected)
    });
    it('returns 1 when padding 0', () => {
      const inputNum = 0;
      const expected = 1;

      const result = Calculate.factorial(inputNum);

      assert.strictEqual(result, expected)
    });
  });
});
