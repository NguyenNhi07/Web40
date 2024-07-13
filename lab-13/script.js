//ARRAY METHODS

//ARRAY
let numbers = [10, 15, 20];

for (let i = 0; i < numbers.length; i++) {
  console.log(`Số thứ ${i + 1} là: ${numbers[i]}`);
}

let names = ["Ba", "An", "Huy", "Đức", "Nhi", "Hùng", "Sơn", "Nhi Nhi", "Hà"];

//name là trả về giá trị của từng phần tử trong mảng, không phải chỉ mục
for (let name of names) {
  console.log(name);
}

let web40 = [
  {
    name: "Ba",
    gender: "male",
  },
  {
    name: "An",
    gender: "female",
  },
  {
    name: "Huy",
    gender: "male",
  },
  {
    name: "Nhi",
    gender: "male",
  },
];

for (let student of web40) {
  console.log(
    `Học viên có tên là ${student.name}, có giới tính là ${student.gender}`
  );
}

//BÀI 1
function checkArrAsc(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= arr[i + 1]) {
      return "Mảng không tăng dần";
    }
  }
  return "Mảng tăng dần";
}
let arr = [1, 2, 3, 4, 5];
console.log(checkArrAsc(arr));

//BÀI 2
function checkArrDesc(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= arr[i + 1]) {
      return "Mảng không giảm dần";
    }
  }
  return "Mảng giảm dần";
}
console.log(checkArrDesc(arr));

//BÀI 3 : kiểm tra xem mảng này có phải mảng chẵn tăng dần không
function checkEventArrAsc(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let n1 = arr[i];
    let n2 = arr[i + 1];
    if (n1 % 2 != 0 || n1 >= n2) {
      return false;
    }
  }
  return true;
}
let arr1 = [2, 4, 6, 8, 10];
console.log(checkEventArrAsc(arr1));

//BÀI 4
function checkEventArrDesc(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let n1 = arr[i];
    let n2 = arr[i + 1];
    if (n1 % 2 == 0 || n1 <= n2) {
      return false;
    }
  }
  return true;
}
let arr2 = [2, 4, 6, 8, 10];
console.log(checkEventArrDesc(arr2));
