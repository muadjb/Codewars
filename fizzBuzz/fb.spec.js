import { fb } from './fb';

it('', () => {
  expect(fb(1)).toMatchObject([1]);
});

it('', () => {
  expect(fb(2)).toMatchObject([1, 2]);
});

it('', () => {
  expect(fb(3)).toMatchObject([1, 2, 'fizz']);
});

it('', () => {
  expect(fb(4)).toMatchObject([1, 2, 'fizz', 4]);
});

it('', () => {
  expect(fb(5)).toMatchObject([1, 2, 'fizz', 4, 'buzz']);
});

it('', () => {
  expect(fb(9)).toMatchObject([1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz']);
});

it('', () => {
  expect(fb(15)).toMatchObject([1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz']);
});