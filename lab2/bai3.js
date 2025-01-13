// Dữ liệu đầu vào
const class1 = [
  {
    mssv: "PS0000",
    name: "Nguyen Van A",
    avgPoint: 8.9,
    avgTraningPoint: 7,
    status: "pass",
  },
  {
    mssv: "PS0001",
    name: "Nguyen Van B",
    avgPoint: 4.9,
    avgTraningPoint: 10,
    status: "pass",
  },
];

const class2 = [
  {
    mssv: "PS0002",
    name: "Nguyen Van C",
    avgPoint: 4.9,
    avgTraningPoint: 10,
    status: "failed",
  },
  {
    mssv: "PS0003",
    name: "Nguyen Van D",
    avgPoint: 10,
    avgTraningPoint: 10,
    status: "pass",
  },
  {
    mssv: "PS0004",
    name: "Nguyen Van E",
    avgPoint: 10,
    avgTraningPoint: 2,
    status: "pass",
  },
];

// Gộp dữ liệu từ các lớp
const allStudents = [...class1, ...class2];

// Lọc các sinh viên có trạng thái "pass"
const passedStudents = allStudents.filter(
  (student) => student.status === "pass"
);

// Sắp xếp danh sách sinh viên theo điểm số từ cao xuống thấp
const sortedByAvgPoint = [...passedStudents].sort(
  (a, b) => b.avgPoint - a.avgPoint
);

// Sắp xếp danh sách sinh viên theo điểm rèn luyện từ cao xuống thấp
const sortedByTrainingPoint = [...passedStudents].sort(
  (a, b) => b.avgTraningPoint - a.avgTraningPoint
);

// Lấy thông tin Ong vàng (sinh viên có điểm số cao nhất)
const topStudent = sortedByAvgPoint[0];

// Xuất kết quả
console.log("Danh sách sinh viên theo điểm số từ cao xuống thấp:");
console.table(sortedByAvgPoint);

console.log("Danh sách sinh viên theo điểm rèn luyện từ cao xuống thấp:");
console.table(sortedByTrainingPoint);

console.log("Thông tin Ong vàng:");
console.log(topStudent);
