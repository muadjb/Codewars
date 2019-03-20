import { trailingZero } from './trailingZero';

it('', () => {
  expect(trailingZero(0)).toBe(0);
});

it('', () => {
  expect(trailingZero(6)).toBe(1);
});

it('', () => {
  expect(trailingZero(10)).toBe(2);
});

it('should solve row 42', () => {
  expect(trailingZero(30)).toBe(7);
});
