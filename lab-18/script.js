function changeName() {
  const name = document.querySelector(".name");
  name.textContent = "Huy";
}

function showFullName() {
  const name = document.querySelector(".name");
  name.textContent = "Nguyễn Uyển " + name.textContent;
}

function showSortName() {
  const name = document.querySelector(".name");
  name.textContent = name.textContent.replace("Nguyễn Uyển", "");
}

function changeColor() {
  const textColor = document.querySelector("h1");
  textColor.style.color =
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");
}

function setupCounter() {
  const counter = document.querySelectorAll(".counter");

  counter.forEach(function (counter) {
    const min = parseInt(counter.getAttribute("data-min"));
    const max = parseInt(counter.getAttribute("data-max"));

    const minus = counter.querySelector(".minus");
    const plus = counter.querySelector(".plus");
    const value = counter.querySelector(".counter span");

    minus.addEventListener("click", function () {
      const current = parseInt(value.textContent);
      if (current > min) {
        value.textContent = current - 1;
      }
    });

    plus.addEventListener("click", function (e) {
      console.log(e);
      const current = parseInt(value.textContent);
      if (current < max) {
        value.textContent = current + 1;
      }
    });
  });
}

setupCounter();

//preventDefault() => ngăn sự kiện được tính hoạt => thường dùng với form => submit
//stopPropagation() => ngăn sự kiện được lan truyền đi
document.querySelector("a").addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation();

  console.log("click vào thẻ a");
  console.log(e.target);
});

document.body.addEventListener("click", function (e) {
  console.log("Click vào body");
  console.log(e.target);
});

document.addEventListener(
  "click",
  function (e) {
    console.log("Click vào vị trí bất kỳ trên document");
    console.log(e.target);
  },
  {
    once: true, //chỉ thao tác đúng 1 lần
  }
);
