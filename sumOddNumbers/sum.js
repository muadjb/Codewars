export function sumOfOdd(n) {
  const range = [...Array(n - 1).keys()].map(i => i + 1);
  const first = (n - 1) * n + 1;
  return range.reduce((acc, cur) => acc + (first + 2 * cur), first);
}
