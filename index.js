// let a = 7;
// switch (a) {
//   case 1:
//     console.log("dushanba");
//     break;
//   case 2:
//     console.log("seshanba");
//     break;
//   case 3:
//     console.log("chorshanba");
//     break;
//   case 4:
//     console.log("payshanba");
//     break;
//   case 5:
//     console.log("juma");
//     break;
//   case 6:
//     console.log("shanba");
//     break;
//   case 7:
//     console.log("yakshanba");
//     break;
// }

let a = 18856;
for (sum = 0; a > 0; sum += a % 10, a = parseInt(a / 10)) {}
console.log(sum);
