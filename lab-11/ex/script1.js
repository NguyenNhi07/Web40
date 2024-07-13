// BÀI 1
console.log("BÀI 1");
function repeatString1(str) {
  let result = str;
  for (let i = 1; i <= 9; i++) {
    result += str;
  }
  return result;
}
console.log(repeatString1("a"));

// BÀI 2
console.log("BÀI 2");
function repeatString2(str) {
  let result = str;
  for (let i = 1; i <= 9; i++) {
    result += "-" + str;
  }
  return result;
}
console.log(repeatString2("a"));

//BÀI 3
console.log("BÀI 3");
function repeatString(str, n) {
  let result = " ";
  for (let i = 1; i <= n; i++) {
    result += str;
    if (i < n) {
      result += "-";
    }
  }
  return result;
}
console.log(repeatString("a", 5));

// BÀI 4
console.log("BÀI 4");
function sum5() {
  let result = 0;
  for (let i = 0; i <= 100; i++) {
    if (i % 5 == 0) {
      result += i;
    }
  }
  return result;
}
console.log(`Tổng các số chia hết cho 5 từ 0 -> 100: `, sum5());

//BÀI 5
console.log("BÀI 5");
function volume(r) {
  const globular = (4 / 3) * Math.PI * r ** 3;
  console.log(`Thể tích hình cầu có bán kính ${r} là: ${globular}`);
}
volume(4);

//BÀI 6
console.log("BÀI 6");
function sumInteger(a, b) {
  let result = 0;
  for (let i = a + 1; i < b; i++) {
    if (typeof i === "number") {
      result += i;
    }
  }
  return result;
}
const a = 3;
const b = 8;
console.log(
  `Tổng các số nguyên nằm giữa hai số ${a} và ${b} là: `,
  sumInteger(3, 8)
);

//BÀI 7
console.log("BÀI 7");
function isPrime(a) {
  if (a < 2) {
    return true;
  }
}
const x = 4;
console.log(`Số ${x} có phải là số nguyên tố không? `, isPrime(x));

//BÀI 8
console.log("BÀI 8");
function sumPrime(a) {
  let result = 0;
  for (let i = 2; i <= a; i++) {
    if (isPrime(i)) {
      result += i;
    }
  }
  return result;
}

const y = 7;
console.log(`Tổng các số nguyên tố nhỏ hơn hoặc bẳng ${y} là: `, sumPrime(y));

//BÀI 9
console.log("BÀI 9");
function sumDivisors(num) {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      result += i;
    }
  }
  return result;
}

const number = 12;
console.log(`Tổng tất cả các ước số của ${number} là: `, sumDivisors(number));
