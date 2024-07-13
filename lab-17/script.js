// //DOM

// // window === globalThis
// // console.log(window);
// // console.log(document); // đại diện cho cấu trức nội dung
// // console.log(document.head); // đại diện cho cấu trúc nội dung trong thẻ head
// // console.log(document.body); // đại diện cho cấu trúc nội dung trong thẻ body

// //chỉnh sửa nội dung (thêm | sửa | xoá)
// //xử lý sự kiện nội dung

// //tìm kiếm nội dung
// const headingElement = document.querySelector("h1");
// headingElement.textContent = "Hellp JavsScript"; //chỉ thay đổi nội dung văn bản - chỉ in ra chuỗi
// headingElement.innerHTML =
//   "Hello <span style='color: green;'>JavaScript</span>"; //thay thế cấu trúc HTMl bên trong - tự đọc được thành HTML
// headingElement.id = "heading";
// headingElement.className = "heading";
// headingElement.title = "đây là tiêu đề";
// headingElement.lang = "en";

// headingElement.setAttribute("class", "heading-red");
// headingElement.hasAttribute("id");
// headingElement.removeAttribute("id");

// //inline css
// //tên thuộc tính viết dạng camelCase
// //background-color => backgroundColor
// headingElement.style.backgroundColor = "pink";

// //cho phép viết theo cấu trúc của css
// headingElement.style.cssText = `
//     border: 1px solid red;
//     border-radisus: 5px,
//     padding: 10px
// `;

// //class
// //thao tác với class : thêm | sửa | xoá | ẩn | hiện....
// headingElement.classList.add("red-heading");

// //trả lại nodeList gồm thr h1 và h2
// const allHeadingElement = document.querySelectorAll("h1, h2");
// console.log(allHeadingElement);
