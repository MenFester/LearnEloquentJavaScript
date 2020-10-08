let one = 1, two = 2;
console.log(one+two);

const name = "Toy";
// name = "john";    // TypeError: Assignment to constant variable.
console.log(name);

let number = 0;
while (number <= 12) {
    console.log(number);
    number = number + 2;
}

let result = 1;
for (let counter = 0; counter < 10; counter = counter +1) {
    result = result * 2;
}
console.log(result);

for (let current = 20; ; current = current + 1) {
    if (current % 7 == 0) {
        console.log(current);
        break
    }
}