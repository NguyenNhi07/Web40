// Bài 1: Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.
function calculateSphereVolume(r) {
  return (4 / 3) * Math.PI * Math.pow(r, 3);
}
const r = 5;
console.log(`Thể tích hình cầu có bán kính ${r} là `, calculateSphereVolume(r));

// Bài 2: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).
function sumBetweenNumbers(a, b) {
  if (a > b) {
    let temp = a;
    a = b;
    b = temp;
  }
  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum += i;
  }
  return sum;
}
const number1 = 3;
const number2 = 8;
console.log(
  `Tổng các số nguyên từ ${number1} đến ${number2} là `,
  sumBetweenNumbers(number1, number2)
);

// Bài 3: Cho 1 số nguyên dương, viết hàm kiểm tra xem số đó có phải số hoàn hảo (perfect number hay không)
function isPerfectNumber(number) {
  if (number <= 0) {
    return false;
  }
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }
  return sum === number;
}
const number = 6;
if (isPerfectNumber(number)) {
  console.log(`${number} là số hoàn hảo`);
} else {
  console.log(`${number} không phải là số hoàn hảo`);
}
