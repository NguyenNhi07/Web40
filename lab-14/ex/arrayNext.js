// Bài 1. Viết function vào 1 mảng tên học viên, sắp xếp lại mảng này theo chiều ngược của bảng chữ cái.

// sortStudents([‘Nam’, ‘Hoa’, ‘Tuấn’]) => [‘Tuấn’, ‘Nam’, ‘Hoa’]
console.log("BÀI 1");
function sortStudents(names) {
  return names.sort((a, b) => {
    if (a > b) {
      return -1;
    } else return 1;
  });
}

// Example usage
const studentNames = ["Nam", "Hoa", "Tuấn"];
console.log(sortStudents(studentNames));

// Bài 2: Viết function đổi chỗ ngẫu nhiên vị trí của các phần tử trong mảng
// shuffle([1,2,3,4,5]) => [2,3,4,1,5]
// shuffle([1,2,3,4,5]) => [4,2,3,5,1]
console.log("BÀI 2");
function shuffle(arr) {
  //lặp từ phần tử đầu tiên đến ptu n-1
  for (let i = 0; i < arr.length - 1; i++) {
    //lấy phần tử ngẫu nhiên trong khoảng i + 1 -> n | i đang lấy nên lấy từ i + 1
    let j = Math.floor(Math.random() * (arr.length - (i + 1))) + i + 1;
    //đổi chỗ 2 phần tử
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}
let arr = [1, 2, 3, 4, 5];
shuffle(arr);
console.log(arr);

// Bài 3: Viết function để lấy sự phần tử không xuất hiện ở cả 2 mảng
// symmetricDifference([1, 2, 3], [1, 2, 4]) => [3,4]
console.log("BÀI 3");
function symmetricDifference(arr1, arr2) {
  function findDifference(arrA, arrB) {
    return arrA.filter((element) => !arrB.includes(element));
  }
  const difference1 = findDifference(arr1, arr2);
  const difference2 = findDifference(arr2, arr1);
  return difference1.concat(difference2);
}
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 4];
console.log(symmetricDifference(arr1, arr2));

// Bài 4: Viết function lấy tất cả các phần tử không trùng nhau trong cả 2 mảng

// union([1, 2, 3, 1], [4, 3, 2, 4]) => [1,2,3,4]
// union([1, 2, 3, 2, 3], [1, 2, 3, 1, 2]) => [1,2,3]
console.log("BÀI 4");
function union(arr1, arr2) {
  //C1
  const all = arr1.concat(arr2);
  let result = [];
  all.forEach(function (value) {
    if (result.indexOf(value) == -1) result.push(value);
  });
  return result;

  //C2
  //set: nhận vào 1 mảng bất kì, và chỉ lấy những phần tử không trùng lặp -> chuyển sang array bằng Array.from
  //return Array.from(new Set(arr1.concat(arr2)));
}

console.log(union([1, 2, 3, 1], [4, 3, 2, 4]));
console.log(union([1, 2, 3, 2, 3], [1, 2, 3, 1, 2]));
