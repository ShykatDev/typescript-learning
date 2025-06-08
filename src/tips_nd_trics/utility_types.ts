type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

type allOptional = {
  type1?: string;
  type2?: number;
  type3?: boolean;
};

type NewUser = Omit<User, "id" | "isActive">;
type UpdateUser = Partial<Omit<User, "id">>;
type NewUser2 = Pick<User, "name" | "email">;
type AllRequired = Required<allOptional>;

function createUser(user: NewUser): User {
  const newUser: User = {
    id: Date.now(), // Simulating ID generation
    isActive: true, // Default value for isActive
    ...user,
  };
  return newUser;
}

const user = createUser({
  name: "John Doe",
  email: "my@gmail.com",
});

function updateUser(input: UpdateUser): User {
  return {
    ...input,
    ...user, // Merging with existing user data
  };
}
