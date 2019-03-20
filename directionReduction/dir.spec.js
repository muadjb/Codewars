import { dir } from './dir';

it('', () => {
  const dirs = ['NORTH'];
  expect(dir(dirs)).toMatchObject(['NORTH']);
});

it('', () => {
  const dirs = ['NORTH', 'SOUTH'];
  expect(dir(dirs)).toMatchObject([]);
});

it('', () => {
  const dirs = ['NORTH', 'WEST', 'SOUTH', 'EAST'];
  expect(dir(dirs)).toMatchObject(['NORTH', 'WEST', 'SOUTH', 'EAST']);
});

it('', () => {
  const dirs = ['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST'];
  expect(dir(dirs)).toMatchObject(['WEST']);
});

it('', () => {
  const dirs = ['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST'];
  expect(dir(dirs)).toMatchObject([]);
});
