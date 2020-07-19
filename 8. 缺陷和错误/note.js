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