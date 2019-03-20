export function trailingZero(n) {
  if (n <= 5) return 0;

  const kmax = Math.floor(Math.log(n) / Math.log(5));

  // const range = Array.from({ length: kmax - 1 }, (v, k) => k + 1);
  const range = Array.from({ length: kmax }, (v, k) => k);

  const z = range.reduce((acc, cur) => acc + Math.floor(n / Math.pow(5,cur + 1)), 0);

  return z;
}
