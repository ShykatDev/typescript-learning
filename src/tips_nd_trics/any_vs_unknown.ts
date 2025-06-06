let data: any;

data = 123;
data = "hello";
data = true;
data = [1, 2, 3];

// console.log(data.toUpperCase()); // Error: No compilation error, but runtime error if 'data' is not a string

// Try to use 'unknown' instead of 'any'

function processAsString(input: unknown) {
  const str = input as string; // Type assertion
  console.log(str.toUpperCase()); // Safe to call string methods
}

processAsString("hello"); // Works fine
// processAsString(123); // Error: Type 'number' is not assignable to type 'string'

// More refied example with 'unknown'

function processAsString2(input: unknown) {
  if (typeof input === "string") {
    console.log(input.toUpperCase()); // Safe to call string methods
  } else if (typeof input === "number") {
    console.log(input.toFixed(2)); // Safe to call number methods
  } else if (Array.isArray(input)) {
    console.log(input.join(", ")); // Safe to call array methods
  } else {
    console.error("Unknown type");
  }
}

type user = {
  name: string;
  id: number;
};

function isUser(input: unknown): input is user {
  return (
    typeof input === "object" &&
    input !== null &&
    "name" in input &&
    typeof (input as any).name === "string" &&
    "id" in input &&
    typeof (input as any).id === "number"
  );
}

function processUser(input: unknown) {
  if (isUser(input)) {
    console.log(`User: ${input.name}, ID: ${input.id}`);
  } else {
    console.error("Input is not a user");
  }
}

processUser({ name: "Alice", id: 1 }); // Works fine
// processUser({ name: "Bob", id: "2" }); // Error: Input is not a user

function isMouseEvent(event: Event): event is MouseEvent {
  return "clientX" in event && "clientY" in event;
}

function handleEvent(event: Event) {
  if (isMouseEvent(event)) {
    console.log(`Mouse event at (${event.clientX}, ${event.clientY})`);
  } else {
    console.log("Not a mouse event");
  }
}

type Cat = {
  meow: () => void;
};

type Dog = {
  bark: () => void;
};

type Animal = Cat | Dog;

// Type guard to check if an animal is a Cat
function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).meow !== undefined;
}

function makeSound(animal: Animal) {
  if (isCat(animal)) {
    animal.meow(); // Safe to call meow method
  } else {
    animal.bark(); // Safe to call bark method
  }
}
