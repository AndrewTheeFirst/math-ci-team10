export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

export function divide(a: number, b: number): number | null {
  if (b === 0) return null;
  return a / b;
}

export function power(a: number, b: number): number {
  return a ** b;
}

export function factorial(n: number): number | null {
  if (n < 0 || !Number.isInteger(n)) return null;
  if (n <= 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

export function average(numbers: number[]): number | null {
  if (numbers.length === 0) return null;

  const sum = numbers.reduce((acc, val) => acc + val, 0);
  return sum / numbers.length;
}

export function clamp(value: number, min: number, max: number): number {
  return value > max ? max : value < min ? min : value;
}

export function quadratic(
  a: number,
  b: number,
  c: number,
): [number, number] | null {
  const discriminant: number = b ** 2 - 4 * a * c;
  if (discriminant < 0) return null;
  const root1: number = (-b + Math.sqrt(discriminant)) / (2 * a);
  const root2: number = (-b - Math.sqrt(discriminant)) / (2 * a);
  return [root1, root2];
}
