// 1. Viết hàm trả về ngày tháng hiện tại theo định dạng ISO (YYYY-MM-DD)
function getCurrentDate() {
  const datee = new Date();
  const present = `${datee.getFullYear()}-${
    datee.getMonth() + 1
  }-${datee.getDate()}`;
  return present;
}
console.log(getCurrentDate());

// 2. Viết hàm trả về số ngày giữa 2 ngày bất kỳ
// dateString1 và dateString2 là 2 chuỗi ngày tháng dạng YYYY-MM-DD
//'2024-06-11' '2024-06-17'
function getDaysBetweenDates(dateString1, dateString2) {
  const date1 = new Date(dateString1);
  const date2 = new Date(dateString2);
  const diffTime = Math.abs(date1 - date2); //trị tuyệt đối
  const diffDay = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); //làm tròn lên
  return diffDay;
}

console.log(getDaysBetweenDates("2024-06-11", "2024-06-17"));

// 3. Viết hàm trả về chuỗi cho biết thời gian hiện tại theo định dạng 24h (HH:mm:ss)
function getCurrentTime() {
  const datee = new Date();
  const presentTime = `${datee.getHours()}:${datee.getMinutes()}:${datee.getMilliseconds()}`;
  return presentTime;
}
console.log(getCurrentTime());

// 4. Viết hàm cho biết thứ tương ứng với ngày truyền vào
// Ví dụ: Thứ 2, Thứ 3, ...
// dateString là một chuỗi ngày tháng dạng YYYY-MM-DD
function getDayOfWeek(dateString) {
  const date = new Date(dateString);
  const day = date.getDay();
  console.log(day);

  switch (day) {
    case 0:
      return "Thứ 2";

    case 1:
      return "Thứ 3";

    case 2:
      return "Thứ 4";

    case 3:
      return "Thứ 5";

    case 4:
      return "Thứ 6";

    case 5:
      return "Thứ 7";

    case 6:
      return "Chủ nhật";
  }
}
console.log(getDayOfWeek("2024-11-6"));

// 5. Viết hàm kiểm tra ngày truyền vào là tương lai hay quá khứ
// Kết quả trả về là true hoặc false
function isDateInFuture(dateString) {
  const now = new Date();
  const date = new Date(dateString);
  return date.getTime() - now.getTime();
}
console.log(isDateInFuture("2025-11-07"));

// KHÔNG SỬA PHẦN NÀY
// KHÔNG SỬA PHẦN NÀY
// KHÔNG SỬA PHẦN NÀY
module.exports = {
  getCurrentDate,
  getDaysBetweenDates,
  getCurrentTime,
  getDayOfWeek,
  isDateInFuture,
};
