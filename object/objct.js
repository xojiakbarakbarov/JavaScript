function number(a) {
  for (let i = 0; i < a.length; i++) {
    if (typeof a[i] === "number") {
      console.log(a[i] * 2);
    } else {
      continue;
    }
  }
}
number(262623);
