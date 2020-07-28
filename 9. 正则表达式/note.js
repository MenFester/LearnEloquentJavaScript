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

console.log("papa".replace("p", "m"));    // mapa
console.log("Borobudur".replace(/[ou]/, "a"));    // Barobudur
console.log("Borobudur".replace(/[ou]/g, "a"));    // Barabadar  

console.log(
    "Liskov, Barbara\nMacCarthy John\nWadler, Philip"
    .replace(/(\w+), (\w+)/g, "$2 $1")    // $2 指引用2号匹配组
);

let s = "the cia and fbi";
console.log(s.replace(/\b(fbi|cia)\b/g, str => str.toUpperCase()));

let stock = "1 lemon, 2 cabbages, and 101 eggs";
function minusOne(match, amount, unit) {    // match 指整体匹配， amount指第一匹配组， unit指第二匹配组
    amount = Number(amount) - 1;
    if (amount == 1) {
        unit = unit.slice(0, unit.length - 1);
    } else if (amount == 0) {
        amount = "no";
    }
    return amount + " " + unit;    // 返回值替换到match匹配的字符串部分中
}
console.log(stock.replace(/(\d+) (\w+)/g, minusOne));

let name = "harry";
let text = "Harry is a suspicious character.";
let regexp = new RegExp("\\b(" + name + ")\\b", "gi");
console.log(text.replace(regexp, "_$1_"));

console.log("    word".search(/\S/));    // 4

let pattern = /y/g
pattern.lastIndex = 3;
let match3 = pattern.exec("xyzzy");
console.log(match3.index);    // 4
console.log(pattern.lastIndex);    // 5

let global = /abc/g;
console.log(global.lastIndex);    // 0
console.log(global.exec("xyz abc"));    //  [ 'abc', index: 4, input: 'xyz abc', groups: undefined ]
console.log(global.lastIndex);    // 7
let sticky = /abc/y;
console.log(sticky.lastIndex);    // 0
console.log(sticky.exec("xyz abc"));    // null
console.log(sticky.lastIndex);    // 0
console.log(sticky.exec("abc xyz"));    // [ 'abc', index: 0, input: 'abc xyz', groups: undefined ]
console.log(sticky.lastIndex);     // 3

let input = "A string with 3 numbers in it ... 42 and 88.";
let number = /\b\d+\b/g;
let match4;
while (match4 = number.exec(input)) {
    console.log("Found", match4[0], "at", match4.index);
}
