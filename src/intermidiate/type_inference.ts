// Type Inference for the intermediate representation
// If any variable has a value, it is considered to have a type -> It is inferred

let latitude = 12.763; // Inferred as number
let longitude = 77.123; // Inferred as number

function multiply(a = 0, b = 0) {
  return a * b; // Inferred as number
}

const user = {
  name: "Alice", // Inferred as string
  age: 30, // Inferred as number
  isActive: true, // Inferred as boolean
};

function greet(input: typeof user) {
  console.log(
    `Hello, ${input.name}! You are ${input.age} years old. Your account is ${
      input.isActive ? "active" : "inactive"
    }.`
  );
}

const numBers = [1, 2, 3, 4, 5]; // Inferred as number[]
const doubledNumbers = numBers.map((num) => num * 2); // Inferred as number[]
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// ------------------------------------------- Example ------------------------------------------- //

// Without Type Inference
function validateFormWithoutInfer(formData: {
  email: string;
  age: number;
  isAdmin: boolean;
}): boolean {
  const email = formData.email;
  const age = formData.age;
  const isAdmin = formData.isAdmin;

  // Simple validation logic
  if (!email.includes("@") && age < 18 && !isAdmin) {
    return false;
  }

  return true;
}

function validateForm(formData: {
  email: string;
  age: number;
  isAdmin: boolean;
}) {
  const { email, age, isAdmin } = formData;

  // Simple validation logic
  return !email.includes("@") && age < 18 && !isAdmin;
}

/**
 * Why type inference matters?
 * - Readability: Makes code easier to read and understand.
 * - Maintainability: Reduces the need for explicit type annotations, making it easier to maintain code.
 * - Developer Efficiency: Allows developers to focus on logic rather than types, speeding up development.
 * - Type Safety: Helps catch errors at compile time, reducing runtime errors.
 * - Error Prevention: Prevents common mistakes by ensuring that variables are used consistently with their inferred types.
 * - Scalability: Supports larger codebases by providing a clear structure without overwhelming with type annotations.
 * - Fiwer Bugs: Reduces the likelihood of type-related bugs by ensuring that types are inferred correctly based on usage.
 *
 * Best Practices:
 * - Use type inference when the type is clear from the context.
 * - Trust TypeScript's inference capabilities for simple types. But provide explicit types for complex structures.
 *  - Public APIs
 *  - Function Parameters
 *  - Complex or ambiguous types
 *
 * Combine with explicit types for clarity and maintainability: Use type inference for local variables but provide explicit types for function parameters and return types to ensure clarity and maintainability.
 *
 * Avoid any: Relying on inference discourages the use of `any`, which can lead to type safety issues. Instead, let TypeScript infer types based on the context.
 */
