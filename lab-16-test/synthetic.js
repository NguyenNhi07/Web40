// Bài 1: Viết hàm có 2 tham số, tham số đầu tiên là 1 chuỗi thời gian t dạng ‘‘giờ:phút:giây’’, tham số thứ 2 là 1 số x <= 1000. Kết quả trả về là 1 chuỗi biểu thị thời gian sau x giây kể từ thời điểm t. Ví dụ với t = ‘‘09:20:56’’ và x = 7 thì kết quả là ‘‘09:21:03’’.
function addSecondsToTime(startTime, secondsToAdd) {
  const [hours, minutes, seconds] = startTime.split(":").map(Number);
  let totalSeconds = hours * 3600 + minutes * 60 + seconds;
  totalSeconds += secondsToAdd;

  let newHours = Math.floor(totalSeconds / 3600);
  let newMinutes = Math.floor((totalSeconds % 3600) / 60);
  let newSeconds = totalSeconds % 60;

  const formattedTime = `${padZero(newHours)}:${padZero(newMinutes)}:${padZero(
    newSeconds
  )}`;
  return formattedTime;
}
function padZero(number) {
  return number < 10 ? `0${number}` : `${number}`;
}
const startTime = "09:20:56";
const secondsToAdd = 7;
console.log(
  `Thời gian sau ${secondsToAdd} giây từ ${startTime} là:`,
  addSecondsToTime(startTime, secondsToAdd)
);

// Bài 2: Một con ốc sên leo từ đáy giếng lên miệng giếng, biết ban ngày leo được x mét, ban đêm lại bị tụt xuống y mét, hỏi sau bao nhiêu ngày thì ốc sên sẽ lên được đến miệng giếng. Viết hàm giải bài toán trên với 3 tham số h > 0 là chiều cao của giếng, x và y như mô tả trên (x > 0, y > 0).
function daysToReachTop(h, x, y) {
  if (x <= 0 || y <= 0 || h <= 0) {
    return "Invalid input";
  }

  let days = 0;
  let climbedHeight = 0;

  while (climbedHeight < h) {
    climbedHeight += x;
    days++;
    if (climbedHeight >= h) {
      break;
    }
    climbedHeight -= y;
  }
  return days;
}
const h = 50;
const x = 5;
const y = 2;
console.log(
  `Ốc sên ban ngày leo được ${x}m, ban đêm tụt xuống ${y}m, chiều cao giếng là ${h}m. Vậy sau ${daysToReachTop(
    h,
    x,
    y
  )} ngày thì ốc sên sẽ lên được đến miệng giếng.`
);

// Bài 3: Cho 1 số nguyên dương, hãy viết hàm sắp xếp lại các chữ số trong số nguyên đó sao cho ra 1 số nhỏ nhất (giữ nguyên số chữ số). Ví dụ với tham số 530751 thì kết quả là 103557.
function smallestNumberFromDigits(number) {
  const digits = Array.from(String(number), Number);
  digits.sort((a, b) => a - b);
  const smallestNumber = parseInt(digits.join(""));
  return smallestNumber;
}
const originalNumber = 530751;
console.log(
  `Số nhỏ nhất có thể tạo từ các chữ số của ${originalNumber} là:`,
  smallestNumberFromDigits(originalNumber)
);
