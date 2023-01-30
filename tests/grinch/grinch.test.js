const {describe, test, expect} = require('@jest/globals')
const {isValid} = require('../../challenges/grinch/isValid')

describe('Test Function IsValid', () => {

  test('Return True when sends (balón)', () => {
    expect(isValid('(balón)')).toBeTruthy();
  });
});
