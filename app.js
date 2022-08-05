// bài 1
// let str = prompt("nhập chuỗi của bạn").split('');
// let b = [];
// for(let i = 0; i < str.length; i++) {
//     b.unshift(str[i])
// }
// console.log(b.join(''));

//bài 2
// let str = prompt('nhập vào chuỗi kí tự').toLowerCase().split(" ");
// for(let i = 0; i < str.length; i++) {
//     str[i] = str[i][0].toUpperCase() + str[i].slice(1);
// }
// console.log(str.join(" "));

//bài 3
// let arr=[1,2,3,3,4,5,4,4,4,5,5];
// let arr1 =[];
// for(let i = 0; i < arr.length; i++) {
//     if (arr1.indexOf(arr[i]) === -1) {
//         arr1.push(arr[i])
//     }
// }
// console.log(arr1);

//bài 4
// let arr=[5, 2, 3, 4, 1];
// for (let i = 0; i < arr.length - 1; i++) {
//     let a = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[a]) {
//         a = j;
//       }
//     }
//     let t = arr[i];
//     arr[i] = arr[a];
//     arr[a] = t;
//   }
//   console.log(arr);
//cách2
// for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[j] < arr[i]) {
//             let a = arr[i];
//             arr[i] = arr[j];
//             arr[j] = a;
//         }
//     }
// } console.log(arr);

//bài 5
// let arr = ["cường","phú","dũng"];
// let f = true;
// while(f) {
//     let a = prompt('nhập vào các chữ cái R/C/U/D/E').toLowerCase();
//     if ( a === 'c') {
//         let b = prompt('nhập nhân viên mới');
//         arr.push(b)
//         for(let i = 0; i < arr.length; i++) {
//             let c = arr[i];
//             console.log(i + 1, c);
//         }
//     } else if (a === 'r') {
//         for(let i = 0; i < arr.length; i++) {
//             let c = arr[i];
//             console.log(i + 1, c);
//         }
//     } else if (a === 'u') {
//         let b = prompt('nhập tên bạn muốn update');
//         let e = prompt('nhập tên mới bạn muốn update');
//         let d = arr.indexOf(b);
//         arr[d] = e;
//         for(let i = 0; i < arr.length; i++) {
//             let c = arr[i];
//             console.log(i + 1, c);
//         }
//     } else if (a === 'd') {
//         let b = prompt('nhập tên bạn muốn delete');
//         let d = arr.indexOf(b);
//         arr.splice(d,1);
//         for(let i = 0; i < arr.length; i++) {
//             let c = arr[i];
//             console.log(i + 1, c);
//         }
//     } else if (a === 'e') {
//         console.log('kêt thúc');
//         f = false;
//     }
// }

//bài 6
// let day = prompt('nhập ngày tháng năm (dd/mm/yy)').split('/');
// let a =[];
// for(let i = 0; i <day.length; i++) {
//     a.push(Number(day[i]));
// }console.log(a);
// if ((a[0] >= 1 && a[0] <= 30) && (a[1] == 4 || a[1] == 6 || a[1] == 9 || a[1] == 11)){
//     console.log(`${a.join('/')}  hợp lệ`);
//     if (a[0] < 30 ) {
//         a[0] = a[0] + 1;
//         console.log(`ngày tiếp theo là : ${a.join("/")}`);
//     }else if (a[0] == 30) {
//         a[0] = 1;
//         a[1] = a[1] + 1;
//         console.log(`ngày tiếp theo là : ${a.join("/")}`);
//     }
// }else if ((a[0] >= 1 && a[0] <= 31) && (a[1] == 1 || a[1] == 3 || a[1] == 7 || a[1] == 10 || a[1] == 12)) {
//     console.log(`${a.join('/')}  hợp lệ`);
//      if (a[0] == 31 && a[1] == 12) {
//         a[0] = 1;
//         a[1] = 1;
//         a[2] = a[2] + 1;
//         console.log(`ngày tiếp theo là : ${a.join("/")}`);
//      }else if (a[0] < 31){
//         a[0] = a[0] + 1;
//         console.log(`ngày tiếp theo là : ${a.join("/")}`);
//     }else if (a[0] == 31) {
//         a[0] = 1;
//         a[1] = a[1] + 1;
//         console.log(`ngày tiếp theo là : ${a.join("/")}`);
//     }
// } else if ((a[0] >= 0 && a[0] <=29) && a[1] == 2) {
//     if(a[0]==29){
//         if(a[2] % 4 == 0 && a[2] % 100 == 0 && a[2] % 400 == 0) {
//             console.log(`${a.join('/')}  hợp lệ`);
//                 a[0] = 1;
//                 a[1] = a[1] + 1;
//                 console.log(`ngày tiếp theo là : ${a.join("/")}`); 
//         }else {
//             console.log(`${a.join('/')}  không hợp lệ`);
//         }
//     }else{
//         console.log(`${a.join('/')}  hợp lệ`);
//          if (a[0] < 28){
//             a[0] = a[0] + 1;
//             console.log(`ngày tiếp theo là : ${a.join("/")}`);
//         }else if (a[0] == 28) {
//             a[0] = 1;
//             a[1] = a[1] + 1;
//             console.log(`ngày tiếp theo là : ${a.join("/")}`);
//         }
//     }
// }else {
//     console.log(`${a.join('/')}  không hợp lệ`);
// }


//bài 7
// let bookStore = ["đắc nhân tâm", "kĩ năng giao tiếp", "học lập trình"];
// let cart = [];
// for(let i = 0 ; i < bookStore.length; i++) {
//     let bookStore1 = bookStore [i];
//     console.log(i + 1, bookStore1);
// }
// let state = true;
// while (state) {
// let a = prompt('nhập vào chữ cái C/R/U/D/E').toLowerCase();
// if (a === 'c') {
//     alert('bạn muốn kt sách nào');
//     let b = prompt('nhập sách muốm kt');
//     let c = bookStore.indexOf(b);
//     if (c != -1){
//     let n = -1;
//         for (let i = 0; i <= cart.length - 1; i = i + 1) {
//         if (b === cart[i][0]) {
//             n = i;
//             }
//         }
//         if (n === -1) {
//         let number = Number(prompt("nhập số lượng"));
//         cart.push([b, number]);
//         } else {
//         let number = Number(prompt("nhập số lượng"));
//         cart[n][1] = cart[n][1] + number;
//         }
//         for (let i = 0; i <= cart.length - 1; i = i + 1) {
//             console.log(`${i + 1}. ${cart[i][0]} - ${cart[i][1]}`);
//         }

//     } else{
//         console.log('book is not available');
//     }
// } else if (a === 'r') {
//     for(let i = 0 ; i < bookStore.length; i++) {
//         let bookStore1 = bookStore[i];
//         console.log(i + 1, bookStore1);
//     }
//     for(let k = 0;k < cart.length; k++){
//         let l = cart[k];
//         console.log(k + 1, l[0], l[1]);
//     }
// } else if (a === 'u') {
//     let z = prompt("Please input updated book name");
//     let findIndex = -1;
//     for (let i = 0; i <= cart.length - 1; i = i + 1) {
//       if (z === cart[i][0]) {
//         findIndex = i;
//       }
//     }
//     if (findIndex === -1) {
//       console.log("book is not in cart");
//     } else {
//       let x = Number(prompt("Please input new number"));
//       cart[findIndex][1] = x;
//       for (let i = 0; i <= cart.length - 1; i = i + 1) {
//         console.log(`${i + 1}. ${cart[i][0]} - ${cart[i][1]}`);
//       }
//     }
// } else if (a === 'd') {
//     let g = prompt("nhập tên sách");
//     let h = -1;
//     for (let i = 0; i <= cart.length - 1; i = i + 1) {
//       if (g === cart[i][0]) {
//         h = i;
//       }
//     }
// if (h === -1) {
//       console.log("book is not in cart");
//     } else {
//       cart.splice(h, 1);
//       for (let i = 0; i <= cart.length - 1; i = i + 1) {
//         console.log(`${i + 1}. ${cart[i][0]} - ${cart[i][1]}`);
//       }
//     }
//   } else if (a === "e") {
//     console.log("Thank you for shopping");
//     state = false;
//   } else {
//     console.log("Invalid command");
//   }
// }