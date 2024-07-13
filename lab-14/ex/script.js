const grades = [
  { name: "John", grade: 8, sex: "M" },
  { name: "Sarah", grade: 12, sex: "F" },
  { name: "Bob", grade: 16, sex: "M" },
  { name: "Johnny", grade: 2, sex: "M" },
  { name: "Ethan", grade: 4, sex: "M" },
  { name: "Paula", grade: 18, sex: "F" },
  { name: "Donald", grade: 5, sex: "M" },
  { name: "Jennifer", grade: 13, sex: "F" },
  { name: "Courtney", grade: 15, sex: "F" },
  { name: "Jane", grade: 9, sex: "F" },
];

// Viết function tính thứ hạng trung bình của cả lớp
const totalGrade = grades.reduce(function (total, grade) {
  return (total += grade.grade);
}, 0);
const averageGrade = totalGrade / grades.length;
console.log(`Thứ hạng trung bình của cả lớp là: ${averageGrade}`);

// Viết function tính thứ hạng trung bình của nam trong lớp
const totalGradeMale = grades.filter(function (grade) {
  return grade.sex === "M";
});
const newGradeMale = totalGradeMale.reduce(function (total, grade) {
  return (total += grade.grade);
}, 0);
const averageGradeMale = newGradeMale / grades.length;
console.log(`Thứ hạng trung bình của nam trong lớp là: ${averageGradeMale}`);

// Viết function tính thứ hạng trung bình của Nữ trong lớp
const totalGradeFeMale = grades.filter(function (grade) {
  return grade.sex === "F";
});
const newGradeFeMale = totalGradeFeMale.reduce(function (total, grade) {
  return (total += grade.grade);
}, 0);
const averageGradeFeMale = newGradeFeMale / grades.length;
console.log(`Thứ hạng trung bình của nữ trong lớp là: ${averageGradeFeMale}`);

// Viết function tìm học viên Nam có thứ hạng cao nhất trong lớp
const findMale = grades.filter(function (grade) {
  return grade.sex === "M";
});
const findHighGradeMale = findMale.reduce(function (max, grade) {
  return grade.grade > max.grade ? grade : max;
});
console.log(
  `Học viên nam có thứ hạng cao nhất trong lớp là: ${findHighGradeMale.name} có điểm số là: ${findHighGradeMale.grade}`
);

// Viết function tìm học viên Nữ có thứ hạng cao nhất trong lớp
const findFeMale = grades.filter(function (grade) {
  return grade.sex === "F";
});
const findHighGradeFeMale = findFeMale.reduce(function (max, grade) {
  return grade.grade > max.grade ? grade : max;
});
console.log(
  `Học viên nữ có thứ hạng cao nhất trong lớp là: ${findHighGradeFeMale.name} có điểm số là: ${findHighGradeFeMale.grade}`
);

// Viết function tìm học viên Nam có thứ hạng thấp nhất trong lớp
const findMaleLow = grades.filter(function (grade) {
  return grade.sex === "M";
});
const findLowGradeMale = findMaleLow.reduce(function (min, grade) {
  return grade.grade < min.grade ? grade : min;
});
console.log(
  `Học viên nam có thứ hạng thấp nhất trong lớp là: ${findLowGradeMale.name} có điểm số là: ${findLowGradeMale.grade}`
);

// Viết function tìm học viên Nữ có thứ hạng thấp nhất trong lớp
const findFeMaleLow = grades.filter(function (grade) {
  return grade.sex === "F";
});
const findLowGradeFeMale = findFeMaleLow.reduce(function (min, grade) {
  return grade.grade < min.grade ? grade : min;
});
console.log(
  `Học viên nữ có thứ hạng thấp nhất trong lớp là: ${findLowGradeFeMale.name} có điểm số là: ${findLowGradeFeMale.grade}`
);

// Viết function thứ hạng cao nhất của cả lớp
const findHighGrade = grades.reduce(function (max, grade) {
  return grade.grade > max.grade ? grade : max;
});
console.log(
  `Học viên có thứ hạng cao nhất trong lớp là: ${findHighGrade.name} có điểm số là: ${findHighGrade.grade}`
);

// Viết function thứ hạng thấp nhất của cả lớp
const findLowGrade = grades.reduce(function (min, grade) {
  return grade.grade < min.grade ? grade : min;
});
console.log(
  `Học viên có thứ hạng thấp nhất trong lớp là: ${findLowGrade.name} có điểm số là: ${findLowGrade.grade}`
);

// Viết function lấy ra danh sách tất cả học viên Nữ trong lớp
const allFemale = grades.filter(function (grade) {
  return grade.sex === "F";
});
console.log("Danh sách tất cả học viên nữ trong lớp là:", allFemale);

// Viết function sắp xếp tên học viên theo chiều tăng dần của bảng chữ cái
const sortNameUp = grades.sort(function (a, b) {
  return a.name.localeCompare(b.name);
});
console.log(
  `Sắp xếp tên học viên theo chiều tăng dần của bảng chữ cái`,
  sortNameUp
);

// Viết function sắp xếp thứ hạng học viên theo chiều giảm dần
const sortNameDown = grades.sort(function (a, b) {
  return b.name.localeCompare(a.name);
});
console.log(
  `Sắp xếp tên học viên theo chiều giảm dần của bảng chữ cái`,
  sortNameDown
);

// Viết function lấy ra học viên Nữ có tên bắt đầu bằng “J”
const filterName = grades.filter(function (grade) {
  return grade.sex === "F" && grade.name.startsWith("J");
});
console.log('Học viên nữ có tên bắt đầu bằng "J" là: ', filterName);

// Viết function lấy ra top 5 người có thứ hạng cao nhất trong lớp
const sortGrade = grades.sort(function (a, b) {
  return b.grade - a.grade;
});
const top5 = sortGrade.slice(0, 5);
console.log("5 người có thứ hạng cao nhất trong lớp là: ", top5);
