// Chương trình xử lý dữ liệu sản phẩm với object

// Dữ liệu sản phẩm cũ
const products = [
  { code: "P001", name: "Son môi", price: 200000 },
  { code: "P002", name: "Kem dưỡng da", price: 300000 },
  { code: null, name: "Sữa rửa mặt", price: 150000 },
  { code: "P004", name: "", price: 100000 },
  null,
  { code: "P005", name: "Nước hoa", price: 500000 },
  undefined,
];

// Hàm chuyển đổi từ array sang object
function convertArrayToObject(array) {
  // Lọc và loại bỏ các phần tử không hợp lệ
  const validProducts = array.filter(
    (item) => item && item.code && item.name && item.name.trim() !== ""
  );

  // Chuyển đổi sang object với key là mã sản phẩm
  const productObject = Object.fromEntries(
    validProducts.map((product) => [product.code, product])
  );

  return productObject;
}

// Chuyển đổi dữ liệu sản phẩm
const newData = convertArrayToObject(products);

// Xuất kết quả
console.log("Dữ liệu sản phẩm sau khi xử lý:", newData);

// Hàm kiểm tra và log từng sản phẩm
function logProducts(productObject) {
  Object.keys(productObject).forEach((key) => {
    console.log(`Mã sản phẩm: ${key}, Thông tin:`, productObject[key]);
  });
}

// Hiển thị danh sách sản phẩm
logProducts(newData);
