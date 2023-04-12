// ixtiyoriy kiritilgan sonni raqamlar yig'indisini topish.

// let a = 373837;
// for (sum = 0; a > 0; sum += a % 10, a = parseInt(a / 10)) {}
// console.log(sum);

// 1 dan 100 gacha bolgan barcha tub sonlarni topuvchi dastur>

for (let i = 2; i <= 100; ++i) {
  let ctr = 0;

  for (let j = 2; j <= parseInt(i / 2); ++j) {
    if (i % j == 0) {
      ctr = 1;
    }
  }

  if (ctr == 0) {
    console.log(i);
  }
}
