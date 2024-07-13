//BÀI 1
console.log("BÀI 1");
function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
const x = 4;
console.log(`Số ${x} có phải là số nguyên tố không? `, isPrime(x));

//BÀI 2
console.log("BÀI 2");
function sumOfPrimes(n) {
  let result = 0;
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      result += i;
    }
  }
  return result;
}
const d = 7;
console.log(
  `Tổng các số nguyên tố nhỏ hơn hoặc bẳng ${d} là: `,
  sumOfPrimes(d)
);

//BÀI 3
console.log("BÀI 3");
function nthFibonacci(n) {
  if (n <= 0) {
    return "Đây không phải số nguyên dương";
  }
  if (n === 1) {
    return 0;
  }
  if (n === 2) {
    return 1;
  }

  let a = 0,
    b = 1,
    temp;
  for (let i = 3; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}
const n = 3;
console.log(`Số Fibonacci thứ ${n}: `, nthFibonacci(n));

//BÀI 4
console.log("BÀI 4");
function factorial(n) {
  if (n < 0) {
    return "Đây không phải số nguyên dương";
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
const c = 5;
console.log(`Giai thừa của ${c} là: `, factorial(c));

//BÀI 5
console.log("BÀI 5");
function isStrong(n) {
  let temp = n;
  let sum = 0;

  while (temp > 0) {
    const reminder = temp % 10;

    sum += factorial(reminder);

    temp = Math.floor(temp / 10);
  }

  return sum === n; // Kết quả
}

const number = 145;
console.log(`Số ${number} có phải là số Strong không? `, isStrong(number));
