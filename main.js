//*************** 1 Task ***********/

let arr1 = ["Maksim", "Join", "Vika"];

let arr11 = [25, 24, 23];

function mergeArray(a, b) {
  let obj = {};
  for (let i = 0; i < a.length; i++) {
    obj[a[i]] = b[i];
  }
  return obj;
}
console.log(mergeArray(arr1, arr11));

// //*************** 2 Task ***********/
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function getSplit(a, b) {
  let arr1 = [];
  for (let i = 0; i < Math.ceil(a.length / b); i++) {
    let c = a.slice(i * b, i * b + b);
    arr1.push(c);
  }
  return arr1;
}
console.log(getSplit(arr2, 20));

// //**************** 3 Task **********/
let arr3 = [
  { name: "Ivan", age: 18 },
  { name: "Petr", age: 12 },
  { name: "Sidor", age: 25 },
  { name: "Viktoria", age: 17 },
];
let result3 = arr3.filter(function (a) {
  return a.age >= 18;
});
let result23 = arr3.filter(function (a) {
  return a.age < 18;
});
console.log(result3, result23);

// //**************** 4 Task ***********/
let array4 = ["apple", 33, "name", true, null];
let i = 0;
let array14 = [];
while (i < array4.length) {
  array14.push(array4[i]);

  i++;
}
console.log(array14);

// //***************** 5 Tasc ***********/
let array5 = [1, 2, 3, 5, 6, 8, 9];

function getAAA(a) {
  let result = a.filter(function (a) {
    return a % 2 == 1;
  });
  return result;
}
console.log(getAAA(array5));

let array35 = [1, 2, 3, 4];
function calc(a) {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    let c = a[i] ** 2;
    result.push(c);
  }
  return result;
}
console.log(calc(array35));

let array355 = [22, 33, "name", true, null];
function getC(a) {
  for (let i = 0; i < a.length; i++) {
    if (typeof a[i] == "string") {
      return true;
    }
  }
  return false;
}
console.log(getC(array355));

// //**************** Task 6 ***********/
let arr6 = [
  { name: "Ivan", age: 18 },
  { name: "Petr", age: 12 },
  { name: "Sidor", age: 25 },
  { name: "Viktoria", age: 17 },
];
function getAges(array) {
  let result = [];
  for (i = 0; i < array.length; i++) {
    let c = array[i];
    result.push(c.age);
  }
  return result;
}
console.log(getAges(arr6));

// //*************** Task 7 *************/
let arr7 = [
  { name: "Ivan", age: 18 },
  { name: "Petr", age: 12 },
  { name: "Sidor", age: 25 },
  { name: "Viktoria", age: 17 },
];
function getAges(array, key) {
  let result = [];
  for (i = 0; i < array.length; i++) {
    let c = array[i];
    result.push(c[key]);
  }
  return result;
}
console.log(getAges(arr7, "name"));

// //************** Task 9 ***********/

let array9 = [
  1,
  2,
  5,
  true,
  false,
  "max",
  false,
  null,
  555,
  3,
  987,
  656,
  848,
  123,
  04565,
];

let res9 = array9.filter(function (element, index) {
  return array9.indexOf(element) === index;
});
console.log(res9);

// //************** Task 10 **************/

let array10 = [
  1,
  2,
  5,
  true,
  false,
  "max",
  false,
  null,
  555,
  3,
  987,
  656,
  848,
  123,
  123,
  04565,
];

let res10 = array10.filter(function (element, index) {
  return array10.indexOf(element) !== index;
});
let res110 = res10.length;
console.log(res110);

// //************** Task 11 ***************/
let arrayA = [1, 2, 3];
arrayA.reverse();
console.log(arrayA);

// //************** Task 12 ***************/

let arrayG = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
].reduce(function (a, b) {
  return a + b;
});
console.log(arrayG);

// //************** Task 13 *****************/

let array313 = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
function calc(a) {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    let c = a[i] ** 2;
    result.push(c);
  }
  return result;
}
console.log(calc(array313));

// //*************** Task 15 ****************/
let araayH = [1, 2, 3, 4];
function getA(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b) {
      return i;
    }
  }
  return -1;
}
console.log(getA(araayH, 4));
