// function check1(str1, str2) {
//   let a = str1.localeCompare(str2);
//   if (a === 1) [console.log("qisman mavjud")];
//   else if (a === 1) console.log("ikkisi bir xil");
//   else console.log("bir xil emas");
// }

// check1("webbrain", "web");

// function truncate(str) {
//   console.log(str.substring(0, 5));
// }
// truncate("Hojiakbar");

// 1-SAVOL berilgan stringdagi telefon raqamni codelarga ajrating!

// let str = "+998 91 001 3938";
// let count = str.substring(0, 4);
// let reg = str.substring(5, 7);
// let cit = str.substring(8, 11);
// let num = str.substring(11, str.length);

// let res = {
//   country: count,
//   region: reg,
//   city: cit,
//   number: num,
// };

// console.log(res);

// 3 - masala

// let coordinate = {
//   c1: [3, 2, 4], // [1,1,1] = (9+4+16) = 5.1
//   c2: [1, 2, 2], // [1,4,4] = (9) = 3
//   c3: [7, 4, 1], // [49,16,1] = (66) = 8.4
//   c4: [2, 2, 2], // [4,4,4] = (12) = 3.3
// };

// let a = 0;
// let b = 0;
// let c = 0;
// let d = 0;
// for (key of coordinate.c1) {
//   a += Math.pow(key, 2);
// }

// for (key of coordinate.c2) {
//   b += Math.pow(key, 2);
// }
// for (key of coordinate.c3) {
//   c += Math.pow(key, 2);
// }
// for (key of coordinate.c4) {
//   d += Math.pow(key, 2);
// }

// console.log((Math.sqrt(a) + Math.sqrt(b) + Math.sqrt(c) + Math.sqrt(d)) / 4);

// let title = "webbrain academy";
// task
// textni alphabet tarzda joylashtirish kerak.
// sort filter dan foydalanilmasin.
// bosh joylar chiqarib yuborilsin
// javob
//   title = "aaabbcdeeimnrwy";

let str = "Hojiakbar";
str = str.toLowerCase();
let a = "";
for (let i = 97; i <= 122; i++) {
  for (let j = 0; j < str.length; j++) {
    if (str.charCodeAt(j) === i) {
      a += str[j];
    }
  }
}
console.log(a);
