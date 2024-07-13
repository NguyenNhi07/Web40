const students = [
  { name: "Huy", age: 20 },
  { name: "Minh", age: 22 },
  { name: "An", age: 19 },
];

// Bài 1: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ‘‘Huy’’, age: 20 }. Viết hàm tính ra số tuổi trung bình của toàn bộ sinh viên.
function averageAge(students) {
  let sumAge = 0;
  for (let student of students) {
    sumAge += student.age;
  }
  return sumAge / students.length;
}
console.log(`Số tuổi trung bình của các sinh viên là:`, averageAge(students));

// Bài 2: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ‘‘Huy’’, age: 20 }. Viết hàm sắp xếp lại mảng trên theo tuổi học viên từ cao đến thấp.
function sortStudents(students) {
  return students.sort(function (a, b) {
    b.age - a.age;
  });
}
console.log(
  "Danh sách sinh viên đã sắp xếp theo tuổi từ cao đến thấp:",
  sortStudents(students)
);

// Bài 3: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ‘‘Huy’’, age: 20 }. Viết hàm sắp xếp lại mảng trên theo tên học viên (không phân biệt hoa thường).
function sortStudentsByName(students) {
  students.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    return nameA.localeCompare(nameB);
  });
  return students;
}
console.log(
  "Danh sách sinh viên đã sắp xếp theo tên:",
  sortStudentsByName(students)
);

// Bài 4: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ‘‘Huy’’, age: 20 }. Viết hàm lọc ra những sinh viên nào có tên bắt đầu bằng chữ ‘‘H’’ hoặc ‘‘h’’.
function filterStudents(students) {
  const filteredStudents = students.filter((student) => {
    const firstChar = student.name.charAt(0).toLowerCase();
    return firstChar === "h";
  });
  return filteredStudents;
}
const students4 = [
  { name: "Huy", age: 20 },
  { name: "Minh", age: 22 },
  { name: "An", age: 19 },
  { name: "hieu", age: 18 },
];

const filteredStudents = filterStudents(students4);
console.log(
  "Sinh viên có tên bắt đầu bằng 'H' hoặc 'h' là:",
  filterStudents(students4)
);
