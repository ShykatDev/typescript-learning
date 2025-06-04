// | union operator
// Union type allows to pick either one of the types between many types.

type userID = string | number;

type Admin = {
  id: userID;
  name: string;
  role: "admin";
  permissions: string[];
  fullControl: boolean;
};

type Member = {
  id: userID;
  name: string;
  role: "guest";
};

type UserType = Admin | Member; // Union type for UserType

function formatValue(value: string | number): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value.toString();
}

console.log(formatValue("hello")); // "HELLO"
console.log(formatValue(123)); // "123"

type ErrorResponse = {
  error: true;
  message: string;
};

type SuccessResponse = {
  error: false;
  data: string;
};

type ApiResponse = ErrorResponse | SuccessResponse;

const handleApiResponse = (response: ApiResponse) => {
  if (response.error) {
    console.log("Error:", response.message);
  } else {
    console.log("Data:", response.data);
  }
};

handleApiResponse({
  error: true,
  message: "Something went wrong",
});
handleApiResponse({
  error: false,
  data: "Here is your data",
});
