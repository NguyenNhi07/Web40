// Tính tổng các phần tử trong mảng số
function sumOfArray(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total; // Kết quả
}
const arr = [1, 2, 3, 4, 5];
console.log(`Tổng các số trong mảng là: ${sumOfArray(arr)}`);

// Tính trung bình cộng các số trong một mảng
function averageOfArray(arr) {
  let sum = 0;
  let result;
  for (let i = 0; i < arr.length; i++) {
    result = (sum += arr[i]) / arr.length;
  }
  return result; // Kết quả
}
const arr1 = [1, 2, 3, 4, 5];
console.log(`Trung bình tổng các số trong mảng là: ${averageOfArray(arr1)}`);

// Tìm số lớn nhất trong mảng số
// Giả sử mảng chưa được sắp xếp và mỗi giá trị chỉ xuất hiện 1 lần
function findMax(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max <= arr[i]) {
      max = arr[i];
    }
  }
  return max;
}
const arr3 = [1, 2, 3, 4, 5];
console.log(`Số lớn nhất trong mảng là: ${findMax(arr3)}`);

// Tìm số nhỏ nhất trong 1  mảng số
// Giả sử mảng chưa được sắp xếp và mỗi giá trị chỉ xuất hiện 1 lần
function findMin(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min >= arr[i]) {
      min = arr[i];
    }
  }
  return min;
}
const arr4 = [1, 2, 3, 4, 5];
console.log(`Số lớn nhất trong mảng là: ${findMin(arr4)}`);

// Viết hàm để loại bỏ các phần tử trùng nhau trong 1 mảng
// Kết quả phản ảnh trực tiếp trong mảng đầu vào
function removeDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {}

  return; // Kết quả
}

// Viết hàm đảo ngược thứ tự các phần tử trong 1 mảng
// Kết quả phản ảnh trực tiếp trong mảng đầu vào
function reverse(arr) {
  let temp = [];
  for (let i = arr.length; i >= 0; i--) {
    temp[temp.length] = arr[i];
  }
  return temp;
}
console.log(`Đảo ngược mảng: ${reverse([1, 2, 3, 4, 5])}`);

// Viết hàm để lọc ra các số dương trong 1 mảng số
// Kết quả trả về là một mảng mới
function filterEvenNumber(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      newArr[newArr.length] = arr[i];
    }
  }
  return newArr; // Kết quả
}
console.log(`Số dương trong mảng là: ${filterEvenNumber([1, -2, 3, 4, -5])}`);

// Viết hàm kiểm tra xem một mảng có chứa bất kỳ số nào là số nguyên tố hay không
function isPrime(a) {
  if (a < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(a); i++) {
    if (a % i == 0) {
      return false;
    }
  }
  return true;
}

function hasPrime(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      return true;
    }
  }
}
console.log(`Mảng này chứa số nguyên tố không? ${hasPrime([1, 2, 3, 4, 5])}`);

// Viết hàm để bình phương tất cả giá trị trong mảng
// Kết quả trả về là một mảng mới
function squareAllElement(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let newValue = arr[i] ** 2;
    newArr[newArr.length] = newValue;
  }
  return newArr; // Kết quả
}
console.log(
  `Bình phương các giá trị trong mảng ${squareAllElement([1, 2, 3, 4, 5])}`
);
