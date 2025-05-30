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
  };

  return user;
}

const user1 = createUser("Alice");
console.log(user1);
