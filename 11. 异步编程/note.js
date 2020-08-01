setTimeout(() => console.log("Tick"), 1000);

let fifteen = Promise.resolve(15);
fifteen.then(value => console.log(`Got ${value}`));    // 这里先打印Got 15，再打印上面的Tick

new Promise(resolve => {
    setTimeout(() => {
        resolve("Hello");
    }, 2000);
}).then(val => {
    console.log(val);
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("World");
        }, 2000);
    })
}).then(val => {
    console.log(val);
});