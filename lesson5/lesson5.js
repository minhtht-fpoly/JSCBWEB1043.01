//Hàm
//Khai báo
// Declairation function ( Hàm khai báo)
// function hamKhaiBao() {
//   var checkNumber = 10;
//   console.log(checkNumber);
// }
// // Expression function (Hàm biểu thức)
// const hamBieuThuc = function () {
//   alert("Hàm biểu thức đã chạy");
// };
// //Một số tính chất quan trọng của hàm trong JS
// //Hàm không thực thi khi được khai báo mà thực thi khi được gọi
// //Biến được khai báo trong hàm thì sẽ không thể truy xuất ở ngoài hàm
// hamKhaiBao();
// // hamBieuThuc();
// console.log(checkNumber);
// var IGN;
// function dangNhap() {
//   IGN = "Độ Mixi";
// }
// function loiChao() {
//   alert("Chào mừng vip chí tôn" + IGN + "đã đăng nhập vào game");
// }
// dangNhap();
// loiChao();
// function add() {
//   console.log(3 + 4);
// }
// add();
// let soHang1 = prompt("Nhập số hạng 1");
// let soHang2 = prompt("Nhập số hạng 2");
// function add(a, b) {
//   return a + b;
//   console.log(a + b);
// }
// let tong = add(prompt("Nhập số hạng 1") * 1, prompt("Nhập số hạng 2") * 1);
// alert(tong);

// function xetTuoi(x) {
//   if (x > 12) {
//     alert("Cần xét tiếp");
//     return;
//   }
//   if (x >= 18) {
//     alert("An toàn");
//   }
// }
// xetTuoi(30);
// document.getElementById("target").addEventListener("mouseleave", function () {
//   console.log("Chuột vừa rời khỏi thẻ div");
// });
function doiViTri() {
  document.getElementById("target").style.textAlign = "right";
}
document.getElementById("target").addEventListener("mouseleave", function () {
  document.getElementById("target").style.textAlign = "left";
});
function doiMau() {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  document.getElementById("target").style.backgroundColor =
    `rgb(${r}, ${g}, ${b})`;
}
