// let sum1 = 0,
//   sum2 = 0,
//   s = 0;

// for (let a = 1; a < 100; a++) {
//   if (a % 2) {
//     sum1 += a;
//   } else {
//     sum2 += a;
//   }
//   let k = 0;
//   for (let j = 2; j <= parseInt(a / 2); ++j) {
//     if (a % j == 0) {
//       k = 1;
//     } else if (a == 1) {
//       k = 1;
//     }
//   }

//   if (k == 0) {
//     // console.log("tub son =", a);
//     s++;
//   }
// }
// console.log("toq sonlar yig'indisi = ", sum1);
// console.log("juft sonlar yig'indisi = ", sum2);
// console.log("tub son soni :", s);

for (let a = 2; a <= 10; a++) {
  for (let b = 1; b <= 10; b++) {
    console.log(a, "x", b, "=", a * b);
  }
  console.log();
}
