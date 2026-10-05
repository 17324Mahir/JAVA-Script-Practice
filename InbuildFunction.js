let num = 12;
console.log(typeof (num)); // "number"

let a = '10';
console.log(typeof (a)); // "string"

let a1 = '10';
console.log(parseInt(a1)); // 10

let a2 = '10.5';
console.log(parseFloat(a2)); // 10.5

const PI = 3.14159;
console.log(PI); // 3.14159
console.log(PI.toFixed(2)); // 3.14
console.log(PI.toPrecision(4)); // 3.14


console.log(Math.round(PI)); // 3
console.log(Number(a2)); // 10.5
console.log(typeof(PI.toFixed(2))); // "string"
console.log(typeof(Number(a2))); // "number"