// Type and interface can be used interchangeably in many cases, but there are some differences.

// When to use type in TypeScript:
// - For primitives, unions, intersections, and complex function signatures.
// - When dealing with utility types and advanced TypeScript features.

type User = {
  name: string;
  age: number;
};

type Admin = User & {
  role: string;
};

const user: Admin = {
  name: "John",
  age: 30,
  role: "admin",
};

type AddFunction = (a: number, b: number) => number;
const add: AddFunction = (a, b) => a + b;

type ID = string | number;

// ---------------------------------------------------------------------------------

// When to use interface in TypeScript:
// - For defining objects, especially when you need extensibility (e.g. libraries or large projects)
// - When augmenting types in existing code or third-party libraries.

interface UserInterface {
  name: string;
  age: number;
}

interface AdminInterface extends UserInterface {
  role: string;
}

const admin: AdminInterface = {
  name: "Jane",
  age: 25,
  role: "admin",
};

interface IAddFunction {
  (a: number, b: number): number;
}

interface IID {
  value: string | number;
}
