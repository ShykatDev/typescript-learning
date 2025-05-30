/**
 * TypeScript parameters.
 * Typed return values.
 * Optional parameters.
 * Default value.
 * Rest parameters.
 */

// TypeScript parameters and return types
function add(a: number, b: number): number {
  // return "Hello"; // Error: ❌ return type is not number
  // return (a+b).toFixed(2); // Error: ❌ return type is not number
  return a + b;
}

console.log(add(5, 10)); // Output: 15

// Optional parameters
function greet(name: string, message?: string) {
  console.log(`Hello ${name}, ${message ?? "Welcome!"}`);
}

// Default value for optional parameters
function greet2(name: string, message: string = "Welcome!") {
  console.log(`Hello ${name}, ${message}`);
}

greet("Alice"); // Output: Hello Alice, Welcome!
greet("Bob", "Good morning!"); // Output: Hello Bob, Good morning!
greet2("Charlie"); // Output: Hello Charlie, Welcome!
greet2("Dave", "Good evening!"); // Output: Hello Dave, Good evening!

// Rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(1, 2, 3, 4, 5)); // Output: 15
