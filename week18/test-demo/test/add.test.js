// var assert = require('assert');
import assert from 'assert'
import { add } from '../src/add.js';

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});


describe('function add', () => {
  it('add 6+8=14', () => {
    assert(add(6,8), 14)
  })
})