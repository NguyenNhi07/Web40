//callback: là một hàm được truyền vào hàm khác dưới dạng đối số và được gọi trong hàm đó

const arr = [1, 2, 3, 4, 5];

// forEach: duyệt qua các phần tử trong mảng | với mỗi phần tử, gọi callback một lần
console.log("FOR EACH");
function logSquare(n) {
  console.log(n ** 2);
}
arr.forEach(logSquare);

//tìm 1 phần tử khớp với điều kiện
console.log("FIND");
function isSquareGreaterThan10(n) {
  const square = n ** 2;
  return square > 10;
}
console.log(arr.find(isSquareGreaterThan10)); // trả về 1 giá trị | undefined

//tìm tất cả phần tử khớp với điều kiện
console.log("FILTER");
function isEven(n) {
  return n % 2 == 0;
}
console.log(arr.filter(isEven)); // trả về 1 mảng gồm nhiều phần tử thoả mãn điều kiện | mảng rỗng []

//biến đối các phần tử trong mảng
console.log("MAP");
function multiplyBy10(n) {
  return n * 10;
}
console.log(arr.map(multiplyBy10)); //trả về một mảng mới chứa các phần tử mới

//tổng hợp (tính toán) các phần tử trong mảng -> trả về 1
//accumulator: biến tích luỹ | number: giá trị từng phần tử trong mảng
console.log("REDUCE");
function sum(accumulator, number) {
  accumulator += number;
  return accumulator;
}
console.log(arr.reduce(sum, 0)); //0 là biến tích luỹ

// sort() : trả về mảng gốc thay đổi thứ tự | toSorted(): trả về mảng mới
//sắp xếp các phần tử trong mảng theo điều kiện | 1 | -1
console.log("SORT");
const arr2 = [1, 3, 2, 5, 4];
function compare(a, b) {
  return a - b;
}
console.log(arr2.sort(compare)); //trả về mảng gốc thay đổi thứ tự
