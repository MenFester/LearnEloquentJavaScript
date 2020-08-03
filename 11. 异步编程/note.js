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

new Promise((_, reject) => reject(new Error("Fail")))
.then(value => console.log("Handler 1"))
.catch(reason => {
    console.log("Caught failure " + reason);    // Caught failure Error: Fail
    let fail_flag = 0;
    if (fail_flag) {
        return new Promise((_, reject) => reject(new Error("Fail again.")));    // 模拟再次失败处理
    } else {
        return "nothing";    // 模拟成功处理，返回nothing结果
    }  
    
})
.then(value => console.log("Handler 2", value))    // Handler 2 nothing
.catch(reason => console.log("Caught failure " + reason));    // Caught failure Error: Fail again.