const R = require('ramda');
// const { modulo, and, or, partial } = R;

const compliments = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
};

// export function dnaStrand(dna) {
//   if ( !dna || dna.legth === 0) {
//     return '';
//   }

//   const replaceA = dna => dna.replace('A', 'T');
//   const replaceT = dna => dna.replace('T', 'A');
//   const replaceC = dna => dna.replace('C', 'G');
//   const replaceG = dna => dna.replace('G', 'C');

//   const replaceAll = R.pipe(replaceA, replaceT, replaceC, replaceG)

//   return replaceAll(dna);
// }

export function dnaStrand(dna) {
  if ( !dna || dna.legth === 0) {
    return '';
  }

  return dna.split('').map(compliment).join('');
}

function compliment(character) {
  return compliments[character];
}
