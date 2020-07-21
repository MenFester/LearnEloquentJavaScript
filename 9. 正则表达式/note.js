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

console.log(/neighbou?r/.test("neighbor"));    // true

let dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime.test("1-30-2003 8:45"));    // true

console.log(/boo+(hoo+)+/i.test("Boohoooohoohooo"));    //true

let match = /\d+/.exec("one two 100");
console.log(match);    // [ '100', index: 8, input: 'one two 100', groups: undefined ]
console.log(match.index);    // 8
console.log("one two 100".match(/\d+/));
let match2 = /\d+/.exec("one two 100 200 300");
console.log(match2);

let quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello'"));

console.log(/bad(ly)?/.exec("bad"));    // [ 'bad', undefined, index: 0, input: 'bad', groups: undefined ]
console.log(/(\d)+/.exec("123"));    // [ '123', '3', index: 0, input: '123', groups: undefined ]

console.log(new Date());
console.log(new Date(2009, 11, 9));
console.log(new Date(2013, 11, 19).getTime());

function getDate(string) {
    let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
    return new Date(year, month-1, day);
}
console.log(getDate("1-30-2003"));

console.log(/\bcat\b/.test("concatenate"));    // false
console.log(/\bcon\b/.test("concatenate"));    // false
console.log(/\bcon/.test("concatenate"));    // true
console.log(/\bcon/.exec("concatenate"));    // [ 'con', index: 0, input: 'concatenate', groups: undefined ]

let animalCount = /\b\d+ (pig|cow|chicken)s?\b/
console.log(animalCount.test("15 pigs"));    // true
console.log(animalCount.test("15 pigchickens"));    // false