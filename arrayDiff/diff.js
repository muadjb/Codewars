export function diff(a, b) {
  const diff = a.filter(i => !b.includes(i));
  return diff;
}
