// Bài 1: Viết hàm loại bỏ các giá trị sai trong 1 mảng. Các giá trị sai bao gồm: false, null, undefined, NaN, 0, ‘’‘’.
function removeFalsyValues(arr) {
  return arr.filter((value) => {
    return (
      value !== false &&
      value !== null &&
      value !== undefined &&
      !isNaN(value) &&
      value !== 0 &&
      value !== ""
    );
  });
}
let array = [false, 0, "", null, undefined, NaN, 42, "hello"];
console.log(
  `Các giá trị sai trong mảng [${array}] là: `,
  removeFalsyValues(array)
);

// Bài 2: Cho 1 mảng các chuỗi. Viết hàm lọc ra các phần tử có độ dài lớn nhất. Ví dụ với tham số [‘‘aba’’, ‘‘aa’’, ‘‘ad’’, ‘‘c’’, ‘‘vcd’’] thì kết quả trả về [‘‘aba’’, ‘‘vcd’’].
function filterMaxLengthStrings(arr) {
  let maxLength = Math.max(...arr.map((str) => str.length));
  let result = arr.filter((str) => str.length === maxLength);
  return result;
}
let stringArray = ["aba", "aa", "ad", "c", "vcd"];
console.log(
  `Các phần tử có độ dài lớn nhất trong mảng [${stringArray}] là:`,
  filterMaxLengthStrings(stringArray)
);

// Bài 3: Viết hàm so sánh mảng, truyền vào 2 mảng bất kỳ (chỉ chứa số nguyên), kết quả trả về là 1 mảng chỉ chứa những phần tử không đồng thời nằm trong 2 mảng truyền vào. Ví dụ truyền vào   [1, 2, 3] và [1, 3, 4, 5, 5] thì kết quả trả về là mảng [2, 4, 5, 5].
function compareArrays(arr1, arr2) {
  let diff1 = arr1.filter((item) => !arr2.includes(item));
  let diff2 = arr2.filter((item) => !arr1.includes(item));
  let result = diff1.concat(diff2);
  return result;
}
let array1 = [1, 2, 3];
let array2 = [1, 3, 4, 5, 5];
console.log(
  `Mảng chứa cá phần tử không đồng thời nằm trong 2 mảng [${array1}] và [${array2}] là:`,
  compareArrays(array1, array2)
);

// Bài 4: Cho 2 số nguyên dương m và n. Tạo ra 1 mảng 2 chiều m x n là các số nguyên liên tiếp (tính từ 1) theo kiểu ziczac. Ví dụ với m = 3 và n = 4 thì kết quả là mảng 2 chiều như sau                 [ [1, 2, 3, 4], [8, 7, 6, 5], [9, 10, 11, 12] ].
function createZigzagArray(m, n) {
  let result = [];
  let counter = 1;

  for (let i = 0; i < m; i++) {
    let row = [];

    if (i % 2 === 0) {
      for (let j = 0; j < n; j++) {
        row.push(counter);
        counter++;
      }
    } else {
      for (let j = n - 1; j >= 0; j--) {
        row.push(counter);
        counter++;
      }
    }
    result.push(row);
  }
  return result;
}
let m = 3;
let n = 4;
console.log(`Mảng hai chiều ${m}x${n} là:`, createZigzagArray(m, n));
