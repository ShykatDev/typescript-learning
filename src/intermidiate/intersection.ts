// & intersection operator
// Intersection type allows to combine multiple types into one.

type Person = {
  name: string;
  age: number;
  address: {
    street: string;
    city: string;
    country: string;
  };
  isEmployed: boolean;
};

type Empolyee = Person & {
  role: "employee";
  salary: number;
};

type Customer = Person & {
  role: "customer";
  purchaseHistory: string[];
};

const Rahul: Empolyee = {
  name: "Rahul",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA",
  },
  isEmployed: true,
  role: "employee",
  salary: 50000,
};

const John: Customer = {
  name: "John",
  age: 25,
  address: {
    street: "456 Elm St",
    city: "Los Angeles",
    country: "USA",
  },
  isEmployed: false,
  role: "customer",
  purchaseHistory: ["item1", "item2", "item3"],
};

type BaseProps = {
  id: string;
  className?: string;
};

type ButtonProps = BaseProps & {
  onClick: () => void;
  label: string;
};

type InputProps = BaseProps & {
  type: "text" | "password" | "email";
  placeholder?: string;
  onChange: (value: string) => void;
};
