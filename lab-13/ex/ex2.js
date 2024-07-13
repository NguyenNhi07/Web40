// Bài tập
const persons = [
  { name: "Ba", gender: "Male", year: 1992 },
  { name: "Mai Anh", gender: "Female", year: 1992 },
  { name: "Đức", gender: "Male", year: 1995 },
];
// 1. Viết hàm getNames nhận vào một mảng các object
// Mỗi object chứa tên và tuổi của một người
// Ví dụ: [ { name: "Ba", age: 31}, { name: "Mai Anh", age: 30 } ]
// Trả về một mảng mới chỉ chứa tên của mọi người
// Ví dụ: [ "Ba", "Mai Anh" ]
console.log("BÀI 1");
function getNames(persons) {
  let newArr = [];
  for (let item of persons) {
    newArr.push(item.name);
  }

  return newArr; // Kết quả
}
console.log(getNames(persons));

// 2. Viết hàm getValues nhận vào một mảng các object bất kỳ và một key
// Ví dụ: [ { name: "Ba", age: 31 }, { name: "Mai Anh", age: 30 } ]
// Trả về một mảng mới chỉ chứa giá trị của key tương ứng trong object
// Ví dụ: getValues(arr, "age") => [ 31, 30 ]
console.log("BÀI 2");
function getValues(arr, key) {
  const newArr2 = [];
  for (let item of arr) {
    newArr2.push(item[key]);
  }

  return newArr2; // Kết quả
}
console.log(getValues(persons, "gender"));

// 3. Viết hàm getMax nhận vào một mảng các object bất kỳ và một key
// Ví dụ: [ { name: "Ba", age: 31 }, { name: "Mai Anh", age: 30 } ]
// Trả về giá trị cao nhất của key tương ứng
// Ví dụ: getMax(arr, "age") => 31
console.log("BÀI 3");
function getMax(arr, key) {
  let max = 0;
  for (let item of arr) {
    if (item[key] > max) {
      max = item[key];
    }
  }
  return max; // Kết quả
}
console.log(getMax(persons, "year"));

// 4. Viết hàm removeKey nhận vào một mảng các object bất kỳ và một key
// Ví dụ: [ { name: "Ba", age: 31 }, { name: "Mai Anh", age: 30 } ]
// Trả về mảng sau khi xóa bỏ tất cả key tương ứng trong mảng
// Ví dụ removeKey(arr, "age") => [ { name: "Ba" }, { name: "Mai Anh" } ]
console.log("BÀI 4");
function removeKey(arr, key) {
  for (let item of arr) {
    delete item[key];
  }
  return arr; // Kết quả
}
console.log(removeKey(persons, "name"));

// 5. Viết hàm getSum nhận vào một mảng các object bất kỳ và một key
// Ví dụ: [ { name: "Ba", age: 31 }, { name: "Mai Anh", age: 30 } ]
// Trả về tổng giá trị của key tương ứng
// Ví dụ getSum(arr, "age") => 61
console.log("BÀI 5");
function getSum(arr, key) {
  let sum = 0;
  for (let item of arr) {
    sum += item[key];
  }
  // Code

  return sum; // Kết quả
}
console.log(getSum(persons, "year"));

// 6. Viết hàm countValues nhận vào một mảng các object bất kỳ và một key
// Ví dụ: [ { name: "Ba", age: 31 }, { name: "Mai Anh", age: 30 }, { name: "Minh Đức", age: 30 } ]
// Trả về một object với tổng số lần xuất hiện giá trị của key
// Ví dụ: countValues(arr, "age") => { 31: 1, 30: 2 }
console.log("BÀI 6");
function countValues(arr, key) {
  // Code

  return; // Kết quả
}

// 7. Viết hàm groupBy nhận vào một mảng object bất kỳ và một key
// Ví dụ: [ { name: "Ba", gender: "Male" }, { name: "Mai Anh", gender: "Female" }, { name: "Đức", gender: "Male" } ]
// Trả về một object với các object được nhóm theo key
// Ví dụ: groupBy(arr, "gender") => { male: [ { name: "Ba", gender: "Male" }, { name: "Đức", gender: "Male" } ], female: [ { name: "Mai Anh", gender: "Female" } ]}
console.log("BÀI 7");
function groupBy(arr, key) {
  // Code
  let output = {};

  for (let person of arr) {
    let group = person[key];

    if (!output.hasOwnProperty(group)) {
      output[group] = [];
    }

    output[group].push(person);
  }

  return output; // Kết quả
}

console.log(groupBy(persons, "year"));

// KHÔNG SỬA PHẦN NÀY
// KHÔNG SỬA PHẦN NÀY
// KHÔNG SỬA PHẦN NÀY
module.exports = {
  getNames,
  getValues,
  getMax,
  removeKey,
  getSum,
  countValues,
  groupBy,
};
