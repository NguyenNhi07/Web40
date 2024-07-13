// let self = {
//   name: "Nhuy",
//   age: 21,
//   gender: "Female",
//   isBeautifull: true,
//   isRick: false,
//   speak() {
//     console.log("Hahahahaha");
//   },
//   play() {
//     console.log("R-Hasagi");
//   },
// };

// console.log(self);

// //cú phép dot Nocation
// console.log(self.name);
// console.log(self.age);
// console.log(self.gender);
// self.speak();

// self.name = "Uỷn Nhuy";
// console.log(self.name);

//lặp qua các cặp key value bên trong object
// for (let key in self) {
//   console.log(key);

//   //bracket notation - dùng trong vòng lặp
//   console.log(self[key]);
//   //nếu thuộc tính không tồn tại thì trả về undefined
// }

// Cho 1 object chứa danh sách sinh viên dạng object
// Với key là tên sinh viên và value là quốc gia của sinh viên đó
// const STUDENTS = {
//   ba: "Vietnam",
//   phoebe: "America",
//   kim: "Korea",
//   maria: "Japan",
// };

//  Viết hàm in ra lần lượt các thuộc tính và giá trị của đối tượng
// Hàm nhận vào tham số obj là một đối tượng bất kỳ
// function printPairs(obj) {
//   for (let key in obj) {
//     console.log(`${key}: ${obj[key]}`);
//   }
// }

// printPairs(STUDENTS);

// Viết hàm nhận vào một tên bất kỳ
// Kiểm tra tên có trong danh sách sinh viên hay không
// Nếu có thì in ra câu chào dạng "Hello, I'm Ba! I'm from Vietnam"
// Nếu không có thì in ra "Hello, I'm guest"
// function greeting(name) {
//   if (name in STUDENTS) {
//     console.log(`Hello, I'm ${name}! I'm from ${STUDENTS[name]}`);
//   } else {
//     console.log("Hello, I'm guest");
//   }
// }

// greeting("ba");

//toán tử in
// let obj = { x: 1 };
// "x" in obj;

// function findDistance(a, b) {
//   const d = Math.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2);
//   console.log(d);
// }

// const x1 = { x: 3, y: 2 };
// const x2 = { x: 7, y: 8 };

// findDistance(x1, x2);

// let x = 123.765432;
// x.toString(); //123 => '123' (chuyển thành chuỗi)
// x.toFixed(2); //123.765432 => 123.76 (làm tròn)
// x.toLocaleString("vi-VN"); //chuyển thành ngôn ngữ mình mong muốn 123.765432 => 123,765432

// let y = 2;
// console.log(y.toString(2));

// console.log(Math.floor(123.45));
// console.log(Math.ceil(123.45));
// console.log(Math.min(1, 2, 0, -1, 5));
// console.log(Math.max(1, 2, 0, -1, 5));
// console.log(Math.random());

let str = "Hello";

console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.slice(2, 4)); //lấy 2, 3 không lấy 4 tức là 2 <= ... < 4
console.log(str.length);
console.log(str.includes("lo"));
