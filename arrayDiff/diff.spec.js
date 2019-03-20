import { diff } from './diff';

it('', () => {
  const a = [1, 2, 2, 3];
  const b = [2];
  expect(diff(a, b)).toEqual(expect.arrayContaining([1, 3]));
});
