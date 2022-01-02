const number = [20,36,66,99,42,69];
const maximum = Math.max(20,36,66,99,42,69);
console.log(maximum);
const maximum2 = Math.max(...number);
console.log(maximum);
const maxAry = [number]
const maxAry1 = [...number]
console.log(maxAry);
console.log(maxAry1);
number.push(75);
number.push(57);
number.push(125);
console.log(number);