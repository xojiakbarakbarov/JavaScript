let a = 18856;
for (sum = 0; a > 0; sum += a % 10, a = parseInt(a / 10)) {}
console.log(sum);
