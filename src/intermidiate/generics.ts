function functionName<T>(value: T): T {
  return value;
}

console.log(functionName<string>("Hello, TypeScript!"));
console.log(functionName(42)); // TypeScript infers the type as number

function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}
const mergedObject = merge({ name: "Alice", gender: "M" }, { age: 30 });
console.log(mergedObject); // { name: 'Alice', age: 30 }

// Generic Type
type MysteryBox<T> = {
  value: T;
};

type UsersType = {
  name: string;
  age: number;
  email: string;
};

const numBox: MysteryBox<number> = { value: 42 };
const strBox: MysteryBox<string> = { value: "Hello" };
const userBox: MysteryBox<UsersType | null> = { value: null };

userBox.value?.email; // Optional chaining to safely access email

// Generic Type
type APIResponse<T> = {
  data: T;
  status: number;
  message: string;
};

type ProductResponse = {
  id: number;
  name: string;
  price: number;
};

const fetchUser = async (): Promise<APIResponse<UsersType>> => {
  const response = await fetch("https://api.example.com/user");
  const data = await response.json();
  return {
    data,
    status: response.status,
    message: "User fetched successfully",
  };
};

const fetchProduct = async (): Promise<APIResponse<ProductResponse>> => {
  const response = await fetch("https://api.example.com/product");
  const data = await response.json();
  return {
    data,
    status: response.status,
    message: "Product fetched successfully",
  };
};

// Generic function to fetch data from an API
const fetchData = async <T>(url: string): Promise<APIResponse<T>> => {
  const response = await fetch(url);
  const data = await response.json();
  return {
    data,
    status: response.status,
    message: "Data fetched successfully",
  };
};

async function main() {
  const userResponse = await fetchUser();
  const productResponse = await fetchData<ProductResponse>(
    "https://api.example.com/product"
  );

  console.log(userResponse.data.name);
  console.log(productResponse.data.price);
}

// Record
type UserRecord = Record<string, number | string | boolean>;
const users: UserRecord = {
  user1: 25,
  user2: "Alice",
  user3: true,
};
