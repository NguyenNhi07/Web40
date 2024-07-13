// Truy cập vào thẻ h1 có id=“heading” thay đổi màu chữ thành ‘red’, và in hoa nội dung của thẻ đó
const headingElement = document.querySelector("#heading");
headingElement.classList.add("red");
headingElement.innerText = headingElement.innerText.toUpperCase();

// Thay đổi màu chữ của tất cả thẻ có class “para” thành màu “blue” và có font-size = “20px”
const allParaElement = document.querySelectorAll(".para");
allParaElement.forEach(function (item) {
  item.classList.add("blue", "text-lg");
});

// Thêm thẻ a link đến trang ‘facebook’ ở đằng sau thẻ có class “para-3”
const para3Element = document.querySelector(".pare-3");
para3Element.insertAdjacentHTML(
  "afterend", //thêm vào sau
  '<a href="https://ww.facebook.com">Facebook</a>'
);

// Thay đổi nội dung của thẻ có id=“title” thành “Đây là thẻ tiêu đề”
const idTitleElement = document.querySelector("#title");
idTitleElement.textContent = "Đây là thẻ tiêu đề";

// Thêm class “text-bold” vào thẻ có class=“description” (định nghĩa class “text-bold” có tác dụng in đậm chữ)
const descriptionElement = document.querySelector(".description");
descriptionElement.classList.add("text-bold");

// Thay thế thẻ có class=“para-3” thành thẻ button có nội dung là “Click me”
para3Element.outerHTML = "<button>Click me</button>";

// Copy thẻ có class=“para-2” và hiển thị ngay đằng sau thẻ đó
const para2Element = document.querySelector(".para-2");
para2Element.insertAdjacentHTML("afterend", para2Element.outerHTML);

// Xóa thẻ có class=“para-1”
document.querySelector(".para-1").remove();
