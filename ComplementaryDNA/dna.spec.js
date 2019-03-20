import { dnaStrand } from './dna';

describe('dna Strand', () => {
  it('should return empty string for no input', () => {
    expect(dnaStrand()).toBe('');
  });

  it('should return empty string for null input', () => {
    expect(dnaStrand(null)).toBe('');
  });

  it('should return T for A' , () => {
    expect(dnaStrand('A')).toBe('T');
  });

  it('should pass sample tests' , () => {
    expect(dnaStrand('AAAA')).toBe('TTTT');
    expect(dnaStrand('ATTGC')).toBe('TAACG');
    expect(dnaStrand('GTAT')).toBe('CATA');
  });
});
