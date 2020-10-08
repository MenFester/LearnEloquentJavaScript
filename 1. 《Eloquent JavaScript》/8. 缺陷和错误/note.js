function Person(name) { this.name = name; }
let ferdinand = Person("Ferdinand");    // forgot new
console.log(name);    // Ferdinand

function test(label, body) {
    if (!body()) console.log(`Failed: ${label}`);
    else return `test of "${label}" PASSED!`
}

console.log(test("convet Latin tex to uppercase", () => {
    return "hello".toUpperCase() == "HELLO";
}));

function promptDirection(question) {
    let result = prompt(question);    // prompt函数运行在浏览器中
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw new  Error("Invalid direction: " + result);
}
function look() {
    if (promptDirection("Which way?") == "L") {
        return "a house";
    } else {
        return "two angry bears";
    }
}
try {
    console.log("You see", look());
} catch (error) {
    console.log("Something went wrong: " + error);
}

class InputError extends Error {}
function promptDirection2(question) {
    let result = prompt(question);
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw new InputError("Invalid direction: " + result);
}

for (;;) {
    try {
        let dir = promptDirection2("Where");
        console.log("You chose ", dir);
        break;
    } catch (e) {
        if (e instanceof InputError) {
            console.log("Not a valid direction. Try again.");
        } else {
            console.log(e);
            break;    // 不加break会一直打印e
            // throw e;    // 继续传递异常
        }
    }
}