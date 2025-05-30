// Object Types in TypeScript
// Defining an object type with specific properties
let car: {
  name: string;
  model: string;
  year: number;
  isElectric: boolean;
};

// Initializing the object with valid values
car = {
  name: "Tesla",
  model: "Model S",
  year: 2022,
  isElectric: true,
};

// Updating properties of the object
car.year = 2023; // Valid: Updating year
car.isElectric = false; // Valid: Changing isElectric to false
// car.name = 123; // Error: ❌ not a string
// car.model = true; // Error: ❌ not a string
console.log(car); // Output: { name: 'Tesla', model: 'Model S', year: 2023, isElectric: false }
