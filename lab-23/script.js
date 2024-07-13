// let dish;
// function thinking(callback) {
//   setTimeout(function () {
//     dish = "Cua hoàng đế";
//     callback(); //sau khi nghĩ xong
//   }, 3000);
// }

// function show() {
//   document.querySelector(".dish").textContent = String(dish);
// }
// thinking(show);

// //resolve : thành công | reject: thất bại
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Cua hoàng đế");
//   }, 3000);
// });

// //nếu thành công resolved thì chạy then | nếu thất bại reject thì chạy catch
// promise
//   .then(function (data) {})
//   .then(function () {})
//   .then(function () {})
//   .catch(function (err) {})
//   .finally();

//gọi API - Call API

//API => Application Programming Interface
fetch("https://dummyjson.com/products")
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    renderProduct(json.products);
    console.log("🚀 ~ json.products:", json.products);
  });

function renderProduct(products) {
  //kết hợp với jQuery để render danh sách sản phẩm lên trên màn hình
  const $productList = $(".product-list");

  const html = products
    .map((product) => {
      const productName = product.title;
      const productPrice = product.price;
      const productImage = product.thumbnail;
      return `<div class='product>
                <img src="${productImage}" alt="${productName}">
                <h3>${productName}</h3>
                <p>${productPrice}</p>
            </div>`;
    })
    .join("");

  $productList.html(html);
}
