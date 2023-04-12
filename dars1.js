// explanation of data types
// 1.number
// let a=3;
// let b=5;
// let c=2.4;
// console.log(a+b);
// console.log(a*b);
// console.log(a-b);
// console.log(a/b);
// console.log((a+b)/c);
// console.log(parseInt(c));

// 2.bigint we use bigint data type when we integrate with large numbers
// let bi=34386436374783n
// console.log(typeof bi);
// let a=565326312;
// console.log(a**2);

// 3.string
// let str="Hello"
// let str1=" "
// let str2="world"
// console.log(str+str1+str2);
// let str3="Hello Javascript developer"
// console.log(str3.toUpperCase());
// console.log(str3.toLowerCase());

// 4.boolean

// let number = true;
// console.log(number);

// null

// let a = 17;
// a = null;
// console.log(a);
// console.log(a + 1);

// undefined

// let a = 17;
// a = undefined;
// console.log(a);
// console.log(a + 1);

//  symboll

// let name = Symbol("xojiaknar");
// console.log(name);

//  obeject  ===>    object , array , function ;

// object

// let a = { name: "Xojiakbar", surname: "Akbarov", age: "19" };
// console.log(a);

// array

// let arr = [4, 5, 7, 8, 9, 9, 7, 6, 54, 3];
// console.log(arr);
// console.log("______________________");
// console.log(arr[8]);

for (
  let i = 2;
  i <= 100;
  ++i //loop to check for each number in the range
) {
  let ctr = 0; //to maintain factor count

  for (
    let j = 2;
    j <= parseInt(i / 2);
    ++j //checking for factors
  ) {
    if (i % j == 0) {
      ctr = 1; //increasing factor count when found
    }
  }

  if (ctr == 0) {
    //checking and printing prime numbers
    console.log(i);
  }
}
