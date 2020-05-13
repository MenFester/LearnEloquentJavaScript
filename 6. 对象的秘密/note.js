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
let weirdRabbit = new Rabbit("weird");

console.log(Object.getPrototypeOf(Rabbit));    // [Function]
console.log(Object.getPrototypeOf(weirdRabbit));    // Rabbit { speak: [Function] }
console.log(Rabbit.prototype);    // Rabbit { speak: [Function] }

console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);    // true
