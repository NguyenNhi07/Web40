function showCircle(e) {
  const prev = document.querySelector(".circle");
  if (prev) prev.remove();
  const x = e.clientX;
  const y = e.clientY;
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.style.left = `${x - 15}px`;
  circle.style.top = `${y - 15}px`;
  document.body.append(circle);
}

document.addEventListener("click", showCircle);

// Bài 1

// Nhấn phím enter thì xuất hiện 1 hình tròn ở vị trí bất kỳ trong trang web
// Nhấn các phím space thì xuất hiện 1 hình vuông ở vị trí bất kỳ trong trang web
// Nhấn các phím còn lại thì đổi màu background của trang web thành 1 màu bất kỳ
// Mỗi lần nhấn phím chỉ có 1 hình được xuất hiện (hình tròn hoặc hình vuông tùy thuộc vào phím được bấm)

document.addEventListener("keypress", function (e) {
  switch (e.key) {
    case "Enter": {
      const circle = document.createElement("div");
      circle.classList.add("circle");
      circle.style.left = `${Math.random() * (window.innerWidth - 15)}px`;
      circle.style.top = `${Math.random() * (window.innerHeight - 15)}px`;
      document.body.append(circle);
      break;
    }
    case " ": {
      const circle = document.createElement("div");
      circle.classList.add("square");
      circle.style.left = `${Math.random() * (window.innerWidth - 15)}px`;
      circle.style.top = `${Math.random() * (window.innerHeight - 15)}px`;
      document.body.append(circle);
      break;
    }

    case "ArrowUp": {
      const character = document.querySelector(".character");
      const rect = character.getBoundingClientRect();
      character.style.top = rect.top - 10 + "px";
      break;
    }
    case "ArrowDown": {
      const character = document.querySelector(".character");
      const rect = character.getBoundingClientRect();
      character.style.top = rect.top + 10 + "px";
      break;
    }
    case "ArrowLeft": {
      const character = document.querySelector(".character");
      const rect = character.getBoundingClientRect();
      character.style.top = rect.top + 50 + "px";
      break;
    }
    case "ArrowRight": {
      const character = document.querySelector(".character");
      const rect = character.getBoundingClientRect();
      character.style.top = rect.top + 50 + "px";
      break;
    }

    default: {
      document.documentElement.style.backgroundColor =
        "#" +
        Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, "0");
    }
  }
});

// Bài 2

// Tạo 1 hình tròn trong trang web (có thẻ sử dụng html hoặc tạo bằng javascript)
// Lắng nghe sự kiện khi người dùng bấm vào các phím mũi tên để di chuyển hình tròn
// Phím mũi tên lên : Di chuyển hình tròn lên 20px;
// Phím mũi tên xuống : Di chuyển hình tròn xuống 20px;
// Phím mũi tên sang trái : Di chuyển hình tròn sang trái 20px;
// Phím mũi tên sang phải : Di chuyển hình tròn sang phải 20px;

document.addEventListener("DOMContentLoaded", function () {
  const circle = document.getElementById("circle");
  let flipped = false; // Biến để theo dõi trạng thái lật của hình tròn

  document.addEventListener("keydown", function (event) {
    const step = 20; // Khoảng cách di chuyển

    if (event.key === "ArrowUp") {
      moveCircle(0, -step);
    } else if (event.key === "ArrowDown") {
      moveCircle(0, step);
    } else if (event.key === "ArrowLeft") {
      moveCircle(-step, 0);
      if (!flipped) {
        circle.style.transform = "scaleX(-1)";
        flipped = true;
      }
    } else if (event.key === "ArrowRight") {
      moveCircle(step, 0);
      if (flipped) {
        circle.style.transform = "scaleX(1)";
        flipped = false;
      }
    }
  });

  function moveCircle(dx, dy) {
    // Lấy vị trí hiện tại của hình tròn
    const rect = circle.getBoundingClientRect();
    const currentLeft = rect.left;
    const currentTop = rect.top;

    // Tính toán vị trí mới
    const newLeft = currentLeft + dx;
    const newTop = currentTop + dy;

    // Đảm bảo hình tròn không di chuyển ra ngoài biên của trang
    const maxX = window.innerWidth - circle.offsetWidth;
    const maxY = window.innerHeight - circle.offsetHeight;

    // Giới hạn vị trí của hình tròn trong khoảng màn hình
    const finalLeft = Math.max(0, Math.min(newLeft, maxX));
    const finalTop = Math.max(0, Math.min(newTop, maxY));

    // Áp dụng vị trí mới cho hình tròn
    circle.style.left = `${finalLeft}px`;
    circle.style.top = `${finalTop}px`;
  }
});
