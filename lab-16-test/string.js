// Bài 1: Chuyển 1 chuỗi gồm nhiều từ thành chuỗi mới viết hoa các chữ cái đầu tiên của mỗi từ. Ví dụ: ‘‘HELLO world’’ => ‘‘Hello World’’.
function capitalizeWords(str) {
  let words = str.split(" ");
  let capitalizedWords = words.map((word) => {
    if (word === "") {
      return "";
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  let result = capitalizedWords.join(" ");
  return result;
}
let str = "HELLO world";
console.log(
  `Kết quả chuyển từ chuỗi ${str} sang chuỗi mới viết hoa chữ cái đầu tiên mỗi từ là`,
  capitalizeWords(str)
); // Kết quả: "Hello World"

// Bài 2: Chuyển 1 chuỗi gồm nhiều từ thành dạng Spinal case. Ví dụ: ‘‘HELLO world’’ => ‘‘hello-world’’.
function spinalCase(str) {
  return str.trim().toLowerCase().replace(" ", "-");
}
let str2 = "HELLO world";
console.log(
  `Kết quả khi chuyển chuỗi ${str2} thành dạng Spinal case là`,
  spinalCase(str2)
);

// Bài 3: Viết hàm truyền vào 2 chuỗi, kiểm tra xem chuỗi thứ nhất có chứa toàn bộ ký tự (tính cả dấu cách) nằm trong chuỗi thứ 2 hay không, kết quả trả về true nếu có và false nếu không (không phân biệt hoa thường). Ví dụ ‘‘HELLO world’’ có chứa ‘‘how’’ nhưng không chứa ‘‘hey’’ và không chứa ‘‘ww’’.**
function containsAllCharacters(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let charCount = {};
  for (let char of str1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (let char of str2) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }
  return true;
}
const str3 = "HELLO world";
console.log(
  `Chuỗi ${str3} có chứa "how" không?`,
  containsAllCharacters(str3, "how")
); // true
console.log(
  `Chuỗi ${str3} có chứa "hey" không?`,
  containsAllCharacters(str3, "hey")
); // false
