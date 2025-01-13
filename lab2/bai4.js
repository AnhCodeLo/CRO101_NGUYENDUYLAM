// Chương trình xử lý bất đồng bộ

// Giả lập 3 promise
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 1 hoàn thành"), 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 2 hoàn thành"), 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Promise 3 thất bại"), 1500);
});

// Yêu cầu thứ nhất: Nếu một promise thất bại, dừng ngay lập tức
async function handlePromisesWithStopOnFailure() {
  try {
    const results = await Promise.all([promise1, promise2, promise3]);
    console.log("Tất cả promise hoàn thành:", results);
  } catch (error) {
    console.error("Một promise thất bại:", error);
  }
}

// Yêu cầu thứ hai: Chương trình luôn chạy bất kể thất bại hay thành công
async function handlePromisesAlwaysRun() {
  const promises = [promise1, promise2, promise3];

  const results = await Promise.allSettled(promises);

  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`Promise ${index + 1} hoàn thành:`, result.value);
    } else {
      console.error(`Promise ${index + 1} thất bại:`, result.reason);
    }
  });

  console.log("Tất cả promise đã được xử lý");
}

// Gọi hai hàm để thực thi các yêu cầu
console.log("Xử lý với yêu cầu thứ nhất:");
handlePromisesWithStopOnFailure().then(() => {
  console.log("Xử lý với yêu cầu thứ hai:");
  handlePromisesAlwaysRun();
});
