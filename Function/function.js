// function count(str) {
//   if (str.length == 0) {
//     console.log("Invalid string");
//     return;
//   }
//   for (let i = 0; i < str.length; i++) {
//     let count = 0;
//     for (let j = 0; j < str.length; j++) {
//       if (str[i] == str[j] && i > j) {
//         break;
//       }
//       if (str[i] == str[j]) {
//         count++;
//       }
//     }
//     if (str[i] === "") break;

//     if (count > 0) console.log(`${str[i]}  : ${count}`);
//   }
// }
// let test_str = "Xojiakbar";
// count(test_str);

// function cont(a) {
//   let b = 0;
//   for (let i = 0; i < a.length; i++) {
//     if (typeof a[i] === "number") {
//       b = 1;
//     } else {
//       break;
//     }
//     console.log(a * 2);
//   }
// }
// cont("Xojiakbar");
