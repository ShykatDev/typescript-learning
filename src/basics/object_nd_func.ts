enum Role {
  DEVELOPER = "Developer",
  MANAGER = "Manager",
  DESIGNER = "Designer",
  TESTER = "Tester",
  HR = "HR",
}

const employees: {
  id: number;
  name: string;
  role: Role;
  salary?: number; // Optional property
}[] = [];

employees.push({ id: 1, name: "Alice", role: Role.DEVELOPER });
employees.push({ id: 2, name: "Bob", role: Role.DESIGNER });
employees.push({ id: 3, name: "Charlie", role: Role.HR, salary: 50000 });

console.log(employees);

function getEmployeeById(id: number): {
  id: number;
  name: string;
  role: Role;
  salary?: number;
} {
  const user = employees.find((item) => item.id === id);

  if (!user) {
    throw new Error(`Employee with id ${id} not found`);
  }

  return user;
}

console.log(getEmployeeById(4)); // Output: { id: 1, name: 'Alice', role: 'Developer' }
