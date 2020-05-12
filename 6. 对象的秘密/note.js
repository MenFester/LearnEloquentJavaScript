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