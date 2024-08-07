$(function () {
  // Truy cập vào thẻ h1 có id=“heading” thay đổi màu chữ thành ‘red’, và in hoa nội dung của thẻ đó
  $("#heading").css("color", "red").text($heading.text().toUpperCase());

  // Thay đổi màu chữ của tất cả thẻ có class “para” thành màu “blue” và có font-size = “20px”
  $(".para").css("color", "blue").css("font-size", "20px");

  // Thêm thẻ a link đến trang ‘facebook’ ở đằng sau thẻ có class “para-3”
  $(".para-3").after('<a href="https://facebook.com">Link to Facebook</a>');

  // Thay đổi nội dung của thẻ có id=“title” thành “Đây là thẻ tiêu đề”
  $("#title").text("Đây là thẻ tiêu đề");

  // Thêm class “text-bold” vào thẻ có class=“description” (định nghĩa class “text-bold” có tác dụng in đậm chữ)
  $(".description").addClass("text-bold");

  // Thay thế thẻ có class=“para-3” thành thẻ button có nội dung là “Click me”
  $(".para-3").replaceWith("<button>Click me</button>");

  // Copy thẻ có class=“para-2” và hiển thị ngay đằng sau thẻ đó
  $(".para-2").after($("para-2").clone());

  // Xóa thẻ có class=“para-1”
  $(".para-1").remove();

  console.log(
    $(`<div>
      Ẩn hoặc hiện heading
      <button class='button'>Ẩn heading</button>
      </div>`)
      .find("button")
      .click(function (e) {
        $("#heading").hide(); //hide | show | toggle
      })
      .end() //div
      .prependto() //chèn div vào cị trí nào đấy
  );
});

//tạo nội dung/ thẻ html và hiển thị lên màn hình
//click vào button thì ẩn/ hiển thị
