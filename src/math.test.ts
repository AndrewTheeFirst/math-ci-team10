import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide, factorial, average, clamp, power, quadratic} from './math';

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

describe('average', () => {
  it('calculates the average of a non-empty array', () => {
    // Basic integer result
    expect(average([10, 20, 30])).toBe(20);
    // Float result
    expect(average([1, 2, 3, 4])).toBe(2.5);
  });

  it('returns null for an empty array', () => {
    expect(average([])).toBeNull();
  });
});

describe('clamp', () => {
  it('clamp a number too large', () => {
    expect(clamp(44, 3, 30)).toBe(30);
  });

  it('clamp a number too little', () => {
    expect(clamp(1, 3, 30)).toBe(3);
  });

  it('leave alone a number that is within bounds', () => {
    expect(clamp(15, 3, 30)).toBe(15);
  });
});

describe('power', () => {
  it('compute the power of a natural number', () => {
    expect(power(2, 3)).toBe(8);
  });

  it('compute the power with a negative exponent', () => {
    expect(power(10, -2)).toBe(0.01);
  });
});

describe('quadractic', () => {
  it('quadratic with real roots (1)', () => {
    expect(quadratic(1, 3, 2)).toStrictEqual(
      [-1, -2]
    );
  });

  it('quadratic with real roots (2)', () => {
    expect(quadratic(1, 5, 6)).toStrictEqual(
      [-2, -3]
    );
  });

  it('quadratic with imaginary roots', () => {
    expect(quadratic(1, 1, 1)).toBeNull();
  });
});