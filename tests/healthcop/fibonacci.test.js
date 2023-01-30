const {describe, test, expect} = require('@jest/globals');
const {getFibonacci} = require('../../challenges/healthcop/fibonacci');

describe('Test Function getFibonacci', () => {
  test('Return fibonacci Array', () => {
    expect(getFibonacci(10)).toEqual([0,1,1,2,3,5,8,13,21,34]);
  });
});