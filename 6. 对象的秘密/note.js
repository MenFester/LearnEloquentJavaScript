function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
}

let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};

whiteRabbit.speak("Oh my ears and whiskers, " + "how late it's getting!");
hungryRabbit.speak("I could use a carrot right now.");

// 显示传递this
speak.call(hungryRabbit, "Burp!");

function test() {
    console.log(this);    // node全局对象？
}

test();

function normalize() {
    console.log(this.coords.map(n => n/this.length));    // this.length读得到外部的this
}
normalize.call({coords: [0, 2, 3], length: 5});

function outer() {
    console.log(`outer:: ${this.name}`);    // outer:: linguanqiang
    let self = this;
    function inner() {
        console.log(`inner:: ${this.name}`);    // inner:: undefined
        console.log(`inner:: ${self.name}`);    // inner:: linguanqiang
    }
    inner();
}
outer.call({name: "linguanqiang"});

console.log(Object.getPrototypeOf({}) == Object.prototype);
console.log(Object.prototype);
console.log({}.toString);
console.log(Object.getPrototypeOf(Object.prototype));

let protoRabbit = {
    speak(line) {    // 定义方法的简便方式
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
};
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEEE!");
console.log(Object.getPrototypeOf(killerRabbit));    // { speak: [Function: speak] }

function makeRabbit(type) {    // 传统方式的构造函数，工厂模式——无法区分对象的类型
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type;
    return rabbit;
}

function Rabbit(type) {    // 新的构造函数定义方式
    this.type = type;
}
console.log(Rabbit.prototype == Function.prototype);    // false
console.log(Rabbit.prototype);    // Rabbit {}
console.log(Object.getPrototypeOf(Rabbit.prototype));    // {}

Rabbit.prototype.speak = function(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
}
console.log(Rabbit.prototype);    // Rabbit { speak: [Function] }
console.log(Rabbit);     //  [Function: Rabbit]
let weirdRabbit = new Rabbit("weird");

console.log(Object.getPrototypeOf(Rabbit));    // [Function]
console.log(Object.getPrototypeOf(weirdRabbit));    // Rabbit { speak: [Function] }
console.log(Rabbit.prototype);    // Rabbit { speak: [Function] }

console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);    // true

class Rabbit2 {
    constructor(type) {
        this.type = type;
    }

    speak(line) {
        console.log(`The ${this.type} rabbits is '${line}'`);
    }
}
let killerRabbit2 = new Rabbit2("killer");
let blackRabbit2 = new Rabbit2("black");

Rabbit2.prototype.teeth = "small";
console.log(killerRabbit2.teeth);
killerRabbit2.teeth = "long, sharp, and bloody";    // 屏蔽原型中的同名属性
console.log(killerRabbit2.teeth);

let ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Julia", 62);

console.log(`Julia is ${ages.get("julia")}`);
console.log("Is Jack's age known?", ages.has("Jack"));
console.log(ages.has("toString"));

console.log(Object.keys({x: 1}));

console.log("for key in object:");
for (let key in blackRabbit2) {    // 也查找到原型里的属性teeth
    console.log(key);
}
console.log("for key in Object.keys(object):")
for (let key of Object.keys(blackRabbit2)) {    // 这里用for...of，因为Object.keys返回数组
    console.log(key);
}