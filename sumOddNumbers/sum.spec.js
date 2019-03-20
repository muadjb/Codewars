import { sumOfOdd } from './sum';

describe('dna Strand', () => {
  it('should return 1 for row 1', () => {
    expect(sumOfOdd(1)).toBe(1);
  });

  it('should return 8 for row 2', () => {
    expect(sumOfOdd(2)).toBe(8);
  });

  it('should return 27 for row 3', () => {
    expect(sumOfOdd(3)).toBe(27);
  });

  it('should return 64 for row 4', () => {
    expect(sumOfOdd(4)).toBe(64);
  });

  it('should solve row 5', () => {
    expect(sumOfOdd(5)).toBe(125);
  });

  it('should solve row 42', () => {
    expect(sumOfOdd(42)).toBe(74088);
  });
});
