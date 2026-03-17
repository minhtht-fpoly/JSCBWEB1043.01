//Mảng
//Khai báo mảng 2 cách



//Ngầm định ( gắn thẳng mảng vào 1 biến)
const arr = [6,4,6,7,3,6,7,4,3]
//Tường minh
const arr2 = new Array(9,8,7,6,5,4,3)
// console.log(arr,arr2)
// arr[6] = 10
// //Thêm phần tử vào đầu mảng : unshift()
// arr.unshift(0)
// //Thêm phần tử vào cuối mảng
// arr.push(8)
// //Xóa đầu:
// arr.shift()
// //Xóa cuối :
// arr.pop()
//splice(bắt đầu từ đâu, xóa bao nhiêu phần tử, thêm cài gì vào .....)
// arr.splice(0,0,0)
// arr.splice(arr.length,0,9)
// arr.splice(0,1)
// arr.splice(-1,1)
// console.log(arr)
// let index = arr.indexOf(3)
// arr.splice(index, 1)
// console.log(arr)


// const a =Number( prompt("Nhập giá trị đầu tiên"))
// const b = Number(prompt("Nhập giá trị thứ 2"))
// alert(a+b)
// const checkString = "vgjhbkjnlk"
// console.log(Boolean(checkString))
// if(!checkString){
//     alert("chuỗi không có ký tự")
// }
// else{
//     alert("Chuỗi có ký tự")
// }
var a = 7
b = a++
c = ++a
console.log(a,b,c)