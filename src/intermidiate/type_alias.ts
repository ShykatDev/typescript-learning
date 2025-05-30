// 'type' is a way to create custom types in TypeScript.
//  Most commonly used to create complex types or aliases for existing types.

type Name = string; // Alias for string type
type ID = string | number; // Alias for string or number type

type User = {
  id: ID; // Using the ID type alias
  name: Name; // Using the Name type alias
  age: number;
  isActive: boolean;
  skills?: string[]; // Optional property
  address: {
    street: string;
    city: string;
    country: string;
    coordinates?: {
      latitude: number;
      longitude: number;
    };
  };
};

/** Multiple ways to return user type data
 *  1. Using type anotation -> const user: User = {...} -> ** Most recommended **
 *  2. Using function return type -> ** recommended **
 *  3. Using 'as' keyword to cast the return type
 *  4. Using 'satisfies' operator to ensure the return type matches the User type
 */
function createUser(name: Name) {
  const user: User = {
    id: crypto.randomUUID(),
    name: name,
    age: 0,
    isActive: false,
    skills: [],
    address: {
      street: "",
      city: "",
      country: "",
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
  };

  return user;
}

const user1 = createUser("Alice");
console.log(user1);

type Address = User["address"]; // Extracting the address type from User
type Coordinates = Address["coordinates"]; // Extracting the coordinates type from User's address

function getAddress(addr: Address): Address {
  return {
    street: addr.street,
    city: addr.city,
    country: addr.country,
  };
}

// Function type
type CB = () => void; // Callback type that returns void
function testCB(cb: CB) {
  cb();
}
