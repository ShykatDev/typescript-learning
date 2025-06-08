const orderStatus = {
  PENDING: "pending",
  PROCESSING: "processing",
  COMPLETED: "completed",
  CANCELLED: "cancelled",
} as const;

function generateColorForOrder(
  status: (typeof orderStatus)[keyof typeof orderStatus]
) {
  switch (status) {
    case orderStatus.PENDING:
      return "yellow";
    case orderStatus.PROCESSING:
      return "blue";
    case orderStatus.COMPLETED:
      return "green";
    case orderStatus.CANCELLED:
      return "red";
    default:
      throw new Error(`Unknown order status: ${status}`);
  }
}

const orders = [
  { id: 1, status: orderStatus.PENDING },
  { id: 2, status: orderStatus.PROCESSING },
  { id: 3, status: orderStatus.COMPLETED },
  { id: 4, status: orderStatus.CANCELLED },
];
