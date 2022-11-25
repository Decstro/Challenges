import {describe, test, expect, jest } from '@jest/globals'
import {isValid} from '../../challenges/grinch/isValid'

describe('Test Function IsValid', () => {

  test('Return True When sends (balón)', () => {
    expect(isValid('(balón)')).toBeTruthy();
  });
});
