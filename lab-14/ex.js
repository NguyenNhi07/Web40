// Danh sách các sản phẩm có trong giỏ hàng
let products = [
  {
    name: "Iphone 13 Pro Max", // Tên sản phẩm
    price: 30000000, // Giá mỗi sản phẩm
    brand: "Apple", // Thương hiệu
    count: 2, // Số lượng sản phẩm trong giỏ hàng
  },
  {
    name: "Samsung Galaxy Z Fold3",
    price: 41000000,
    brand: "Samsung",
    count: 1,
  },
  {
    name: "IPhone 11",
    price: 15500000,
    brand: "Apple",
    count: 1,
  },
  {
    name: "OPPO Find X3 Pro",
    price: 19500000,
    brand: "OPPO",
    count: 3,
  },
];

// 1. In ra thông tin các sản phẩm trong giỏ hàng theo cấu trúc sau
// Tên - Giá - Thương Hiệu - Số lượng
// Ví dụ : OPPO Find X3 Pro - 19500000 - OPPO - 3

//padStart(): căn phải, in ra một chuỗi có độ dài bằng số truyền vào
//padEnd(): căn trái

products.forEach(function (product) {
  console.log(
    `${product.name.padStart(25)} - ${product.brand.toLocaleString(
      "vi-VN"
    )} - ${product.count}`
  );
});

// 2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng
// Tổng tiền mỗi sản phẩm = price * count
console.log("BÀI 2");
products.reduce(function (total, product) {
  return (total += product.count ** product.price);
});

// 3. Tìm các sản phẩm của thuơng hiệu "Apple"
console.log("BÀI 3");
products.filter(function (product) {
  return product.brand === "Apple";
});
//trả về true | false

// 4. Tìm các sản phẩm có giá > 20000000
console.log("BÀI 4");

products.filter(function (product) {
  return product.price > 20000000;
});

// 5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)
console.log("BÀI 5");

products.filter(function (product) {
  return product.name.toLowerCase().includes("pro");
});

// 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product
console.log("BÀI 6");
addProduct(function (product) {
  const newProduct = {
    name: "Note Mi 12T",
    price: 4000000,
    brand: "Xiao mi",
    count: 1,
  };
  product.push(newProduct);
  console.log(product);
});

// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng
console.log("BÀI 7");

products.filter(function (product) {
  return product.brand !== "Samsung";
});

// 8. Sắp xếp giỏ hàng theo price tăng dần
console.log("BÀI 8");

products.sort(function sortUp(a, b) {
  return a.price - b.price;
});

// 9. Sắp xếp giỏ hàng theo count giảm dần
console.log("BÀI 9");

products.sort(function (a, b) {
  return b.count - a.count;
});

// 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng
console.log("BÀI 10");
function randomProduct(product) {}
