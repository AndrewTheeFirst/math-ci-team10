import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide, factorial } from './math';

describe('add', () => {
  it('adds two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('handles negative numbers', () => {
    expect(add(-1, -4)).toBe(-5);
  });
});

describe('subtract', () => {
  it('subtracts two numbers', () => {
    expect(subtract(10, 4)).toBe(6);
  });
});

describe('multiply', () => {
  it('multiplies two numbers', () => {
    expect(multiply(3, 7)).toBe(21);
  });

  it('returns zero when multiplied by zero', () => {
    expect(multiply(5, 0)).toBe(0);
  });
});

describe('divide', () => {
  it('divides two numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });

  it('returns null for division by zero', () => {
    expect(divide(10, 0)).toBeNull();
  });
});

describe('factorial', () => {
  it('computes factorial of 5', () => {
    expect(factorial(5)).toBe(120);
  });

  it('returns 1 for factorial of 0', () => {
    expect(factorial(0)).toBe(1);
  });

  it('returns null for negative input', () => {
    expect(factorial(-3)).toBeNull();
  });
});