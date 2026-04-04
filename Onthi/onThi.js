function validateForm(e) {
  //   e.preventDefault();
  let isSubmit = true;
  //Lấy dữ liệu người dùng nhập vào từ thể input name
  let ten = document.getElementById("name").value;
  let tuoi = document.getElementById("tuoi").value;
  let email = document.getElementById("email").value;
  if (ten.trim().length == 0) {
    document.getElementById("err-name").innerHTML = "Tên không được để trống";
    isSubmit = false;
  } else {
    document.getElementById("err-name").innerHTML = "";
  }
  if (isNaN(Number(tuoi))) {
    document.getElementById("err-tuoi").innerHTML = "Tuổi phải là số";
    isSubmit = false;
  }
  if (email.includes("@") && email.includes(".")) {
  } else {
    document.getElementById("err-email").innerHTML =
      "Email không đúng định dạng";
    isSubmit = false;
  }

  if (!isSubmit) {
    return false;
  } else {
    alert("Đăng ký thành công");
  }
}
function tinhTien() {
  let tongTien = 0;
  tienHang =
    document.getElementById("item").value *
    document.getElementById("soLuong").value;
  let tongPhuKien = 0;
  const phuKien = document.getElementsByName("phuKien");
  for (let i = 0; i < phuKien.length; i++) {
    if (phuKien[i].checked == true) {
      tongPhuKien =
        tongPhuKien +
        phuKien[i].value * document.getElementById("soLuong").value;
    }
  }
  tongTien = tienHang + tongPhuKien;

  document.getElementById("tongTien").innerHTML = tongTien;
}
//Slider
let interval;
const arrSrc = [
  "./images/1.webp",
  "./images/2.webp",
  "./images/3.webp",
  "./images/4.webp",
];
let index = 0;
function next() {
  if (index == arrSrc.length - 1) {
    index = 0;
    document.getElementById("slider").src = arrSrc[index];
  }
  index++;
  document.getElementById("slider").src = arrSrc[index];
}
function previous() {
  if (index == 0) {
    index = arrSrc.length - 1;
    document.getElementById("slider").src = arrSrc[index];
  }
  index--;
  document.getElementById("slider").src = arrSrc[index];
}
function auto() {
  interval = setInterval(next, 1000);
}
auto();
function stop() {
  clearInterval(interval);
}
