s = "Hello , World!";
console.log(Object.keys(s));    
// [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13' ]

l = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
for (let c of l) {
    console.log(c);    // a b c d e f g
}

for (let item in l) {
    console.log(item);    // 0 1 2 3 4 5 6 
}

o = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7}
for (let k in o) {
    console.log(k);
}


for (let v of s) {    // 这里如果尝试遍历对象o，会报错对象o不是iterable
    console.log(v);
}

function max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
        if (number > result) {
            result = number;
        }
    }
    return result;
}

console.log(max(4, 1, -9, 2, -2));

let numbers = [5, 1, 7]
console.log(max(...numbers));    // 展开