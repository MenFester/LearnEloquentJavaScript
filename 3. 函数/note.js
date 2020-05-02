const square = function(x) {
    return x * x
};
console.log(square(12));

const power = function(base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result
}
console.log(power(2, 10))

let x = 10;
if (true) {
    // console.log(y);    // 此处y不可见
    let y = 20;
    var z = 30;
    console.log(x + y + z);    // z可见
}
const tmpFunc = function() {
    var r = 0
}
// 此处y不可见
console.log(x + z);    // 此处z可见、r不可见，因为z不是定义在函数中