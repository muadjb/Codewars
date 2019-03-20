export function fb(limit) {
  const whileResult = whileLoop(limit);
  const mapResult = fbMap(limit);
  return mapResult;
}

function whileLoop(limit) {
  const result = [];
  let count = 0;

  while (count++ < limit) {
    const item =
      count % 15 === 0 ? 'fizzbuzz' : count % 3 === 0 ? 'fizz' : count % 5 === 0 ? 'buzz' : count;
    result.push(item);
  }
  return result;
}

function fbMap(limit) {
  const arr = [...Array(limit).keys()].map(i => i + 1);
  return arr.map(replaceNum);
}

const replaceNum = num =>
  num % 15 === 0 ? 'fizzbuzz' : num % 3 === 0 ? 'fizz' : num % 5 === 0 ? 'buzz' : num;
