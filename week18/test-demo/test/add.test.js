import * as mod from '../src/add.js';

// import test from 'ava' 
// test('add 6+8=14', t => {
//     t.is(mod.add(6,8), 14);
// });


import assert from 'assert'
// var assert = require('assert');
it('add 6+8=14', function () {
  assert.equal(mod.add(6,8), 14);
});