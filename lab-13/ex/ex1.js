// Bài 1: Tìm số lớn nhất trong mảng
function findMax(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max <= arr[i]) {
      max = arr[i];
    }
  }
  return max;
}
const arr1 = [1, 2, 3, 4, 5];
console.log(`Số lớn nhất trong mảng là: ${findMax(arr1)}`);

// Bài 2: Tìm số nhỏ nhất trong mảng
function findMin(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min >= arr[i]) {
      min = arr[i];
    }
  }
  return min;
}
const arr2 = [1, 2, 3, 4, 5];
console.log(`Số lớn nhất trong mảng là: ${findMin(arr2)}`);

// Bài 3: Viết hàm cho phép truyền vào 1 mảng các số, kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2
function surplus(arrNumber) {
  let newArr = [];
  for (let i = 0; i < arrNumber.length; i++) {
    newArr.push(arrNumber[i] % 2);
  }
  return newArr;
}
const arr3 = [1, 2, 3, 4, 5];
console.log(
  `Mảng mới có các số dư tương ứng khi chia mảng cũ cho 2 là: `,
  surplus(arr3)
);
// Ví dụ : [4,2,5,6,2,7] => [0,0,1,0,0,1]

// Bài 4: Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần
function copyArr(str) {
  return str.repeat(10);
}
console.log(copyArr("Nhi"));

// Bài 5: Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang.
function copyArr5(str) {
  return (str + "-").repeat(9) + str;
}
console.log(copyArr5("Nhi"));
// Ví dụ: repeatString(‘a’) => Kết quả trả về là ‘a-a-a-a-a-a-a-a-a-a’
