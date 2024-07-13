// Bài 1: Viết một hàm JavaScript để tính số ngày còn lại từ ngày hiện tại đến một ngày cho trước.
function getDaysBetweenDates(dateString) {
  const currentDate = new Date();
  const dateAuto = new Date(dateString);
  const diffTime = Math.abs(currentDate - dateAuto);
  const diffDay = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDay;
}
const dateToCountdown = "2003-11-07";
console.log(
  `Số ngày còn lại từ hiện tại đến ngày ${dateToCountdown}:`,
  getDaysBetweenDates(dateToCountdown)
);
// Bài 2: Tìm năm gần nhất là năm nhuận
function findNextLeapYear() {
  const currentYear = new Date().getFullYear();
  let nextLeapYear = currentYear;
  while (
    !(
      nextLeapYear % 4 === 0 &&
      (nextLeapYear % 100 !== 0 || nextLeapYear % 400 === 0)
    )
  ) {
    nextLeapYear++;
  }
  return nextLeapYear;
}
console.log(`Năm gần nhất là năm nhuận:`, findNextLeapYear());

// Bài 3: Viết hàm nhận vào giá trị là một chuỗi thời gian dạng DD-MM-YYYY (Việt Nam), cho biết ngày đó có phải cuối tuần hay không
function isWeekend(dateString) {
  const date = new Date(dateString);
  const dayOfWeek = date.getDay();
  return dayOfWeek === 6 || dayOfWeek === 0;
}
const dateToCheck = "13-06-2024";
console.log(
  `Ngày ${dateToCheck} có phải là cuối tuần không?`,
  isWeekend(dateToCheck)
);
