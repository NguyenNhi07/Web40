//DATE

//Tạo ra một obj biểu diễn giá trị thời gian
//nếu khôgn truyền tham số vào, sẽ hiển thị ra thời gian hiện tại (thời gian mà câu lệnh được chạy)

const date = new Date();
console.log(date);

const birthDay = new Date("2003-11-08 00:00:00");
console.log(birthDay);

Date.now(); //số mili giây tính từ 1970-01-01 00:00:00:000

//Phương thức: get: lấy thông tin | set: cập nhật/ chỉnh sửa thông tin
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
console.log(date.getTime());
console.log(date.getTimezoneOffset());

// lấy từ phần thời gian với phương thức get và ghép
// 07:52 PM 11//06/2024
let hour;
let suffix;
let minute = date.getMinutes();
let dateOfMonth = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

if (date.getHours() > 12) {
  hour = date.getHours() - 12;
  suffix = "PM";
} else {
  hour = date.getHours();
  suffix = "AM";
}
hour = String(hour).padStart(2, "0");
minute = Sring(minute).padStart(2, "0");
dateOfMonth = String(dateOfMonth).padStart(2, "0");
month = String(month).padStart(2, "0");

console.log(`${hour}:${minute}${suffix} ${dateOfMonth}/${month}/${year}`);

//sử dụng các phương thức để in
date.toLocaleString();
date.toLocaleDateString();

//get
date.setHours(23);
date.setSeconds(59);

const now = new Date();

const diff = date.getTime() - now.getTime(); // dương : tương lại | âm: quá khứ
console.log(date);
const second = Math.floor(diff / 1000);
const minutes = Math.floor(second / 60);
const hours = Math.floor(minutes / 60);
console.log(hours);
