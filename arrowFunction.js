//adding by arrow function
const add3 = (n1,n2) => n1+n2;
const resultAdd3 = add3(15,29);
console.log(resultAdd3);
// multiply by arrow function 
const mul3 = (num1,num2,num3) => num1*num2*num3;
const resultMul3 = mul3(2,5,6);
console.log(resultMul3);
// big arrow function
const bigArrow = (num4 , num5,num6) => {
    const adding = num4 + num5;
    const resultMultiply = adding + num4 + num6;
    const minus = adding * num4 +num6 + resultMultiply - num4 ;
    const output = minus * 2;
    return output;
}
let bigArrowOutput = bigArrow(6,8,13);
console.log(bigArrowOutput);