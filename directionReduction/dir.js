export function dir(dirs) {
  const index = dirs.findIndex(neighborsCancel);
  if (index === -1) {
    return dirs;
  } else {
    return dir(dirs.filter((e, i) => i !== index && i !== index + 1));
  }
  // const nums = dirs.map(toNumbers);
  // const result = recurseNums(nums);
  // return result.map(toDirections);
}

function recurseNums(nums) {
  const index = nums.findIndex(neighborsEqualZero);
  if (index === -1) {
    return nums;
  } else {
    return recurseNums(nums.filter((e, i) => i !== index && i !== index + 1));
  }
}

function toNumbers(x) {
  return x.includes('N')
    ? 1
    : x.includes('SO')
    ? -1
    : x.includes('EA')
    ? 2
    : x.includes('W')
    ? -2
    : 0;
}

function toDirections(n) {
  return n === 1 ? 'NORTH' : n === -1 ? 'SOUTH' : n === 2 ? 'EAST' : n === -2 ? 'WEST' : '';
}

const neighborsEqualZero = (e, i, a) => e + a[i + 1] === 0;

const neighborsCancel = (e, i, a) =>
  (e === 'NORTH' && a[i + 1] === 'SOUTH') ||
  (e === 'SOUTH' && a[i + 1] === 'NORTH') ||
  (e === 'EAST' && a[i + 1] === 'WEST') ||
  (e === 'WEST' && a[i + 1] === 'EAST');

// const removeCurrentAndNextElement = (e, i) => i !== index && i !== index + 1;
