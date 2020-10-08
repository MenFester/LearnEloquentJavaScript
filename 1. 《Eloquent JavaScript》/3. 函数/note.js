const square = function(x) {    // 绑定表示法
    return x * x
};
console.log(square(12));

const power = function(base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result
};
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
};
// 此处y不可见
console.log(x + z);    // 此处z可见、r不可见，因为z不是定义在函数中

function squareFunc(x) {    // 声明表示法
    return x * x;
}

const power2 = (base, exponent) => {    // 箭头函数绑定
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result = result * base;
    }
    
    return result;
};

const square2 = x => x * x;    // 等同于 const square2 = (x) => { return x * x; };
console.log(square2(10));

function power3(base, exponent=2) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result = result * base;
    }
    
    return result;
}

console.log(power3(4));
console.log(power3(2, 6));

function multiplier(factor) {    // 创建闭包
    return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));

function power4(base, exponent) {    // power函数的递归实现
    if (exponent == 0) {
        return 1;
    } else {
        return base * power4(base, exponent - 1);
    }
}
console.log(power4(2, 3));