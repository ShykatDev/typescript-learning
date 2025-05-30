const nums: number[] = [1.1111, 2.21212, 3.65453, 4.22323, 5.23423];

// nums.push("number"); // Error: ❌ not number
nums.push(6); // Valid: 6 is a number

nums.forEach((num) => {
  console.log(num.toFixed(2)); // Output: 1.11, 2.21, 3.65, 4.22, 5.23, 6.00
});

const numsStr: string[] = nums.map((n) => n.toFixed(2));
console.log(numsStr);
