//DOM : Document object model
//Dom cho phép những ngôn ngữ lập trình truy xuất phần tử HTML và thao túng chúng
// console.log(document);
// //Truy xuất thẻ HTML thông qua document và ID của thẻ
// console.log(document.getElementById("target"));
// //Sau khi lấy được thẻ, có thể sử dụng JS để thao túng thuộc tính thể HTML đó

let flag = true;

// document.getElementById("chuot").src = "./images/OIP.webp";
// function dapChuot(hang) {
//   if (flag) {
//     let chuot = Math.round(Math.random() * 6);
//     let hangChuots = document.getElementsByClassName("hangChuot");
//     hangChuots[chuot].src = "./images/OIP.webp";
//     if (hang == chuot) {
//       alert("Chúc mừng bạn đã có chuột ăn");
//       flag = !flag;
//     } else {
//       alert("Móm rồi");
//       flag = !flag;
//     }
//   } else {
//     choiLai();
//   }
// }
// function choiLai() {
//   if (window.confirm("Bạn có muốn chơi tiếp không")) {
//     flag = !flag;
//     let hangChuots = document.getElementsByClassName("hangChuot");
//     for (let i = 0; i < hangChuots.length; i++) {
//       hangChuots[i].src = "./images/chuot-dong-11-ngoisaovn-w1200-h800.jpeg";
//     }
//   }
// }
function tele() {
  //   alert(0);
  ((document.getElementById("noButton").style.top =
    `${Math.round(Math.random() * 400)}px`),
    (document.getElementById("noButton").style.right = `${Math.round(
      Math.random() * 800,
    )}px`));
}
