let re1 = RegExp("abc");
let re2 = /abc/;

let eighteenPlus = /eighteen\+/;

console.log(re1.test("abcde"));    // true
console.log(re1.test("abxde"));    // false
console.log(re2.test("abxde"));    // false

console.log(/[0123456789]/.test("in 1992"));    // true
console.log(/[0-9]/.test("in 1992"));    // true

console.log(/\w/.test("1992"));    // true
console.log(/\W/.test("1992"));    // false

console.log(/\D/.test("1992"));    // false
console.log(/\S/.test("    "));    // false

console.log(/[\d.]/.test("abcdef"));    // false
console.log(/[\d.]/.test("abc.def"));    // true

console.log(/[abc+]/.test("+++++"));    // true
console.log(/[?]/.test("abcdef"));      // false
console.log(/[?]/.test("?abcdef"));    // true

console.log(/[^01]/.test("100110100110101010011"));    // false
console.log(/^\d+/.test("abcdefghijklmn1234"));    // false
console.log(/^\d+/.test("12345678"));    // true
console.log(/^\d+/.test("m12345678"));    // false
console.log(/[^\d]/.test("abcdefghijklmn"));    // true