//ARRAY METHODS
let arr = [1, 2, 3, 4, 5];
Array.isArray(arr);
console.log(Array.isArray(arr));

console.log(arr.reverse());

console.log(arr.includes(2));

console.log(arr.indexOf(3));

console.log(arr.lastIndexOf(2));

console.log(arr.push(10));

console.log(arr.slice(1, 4)); // lấy 3 thằng

console.log(arr.splice(3, 0, "Ba")); //chèn

console.log(arr.splice(3, 1)); // tính từ chỉ mục thứ 3, xoá đi 1 phần tử

console.log(arr.splice(1, 1, "Ba")); // Thay thế: xoá đi 1 phần tử và chèn phần tử mới
