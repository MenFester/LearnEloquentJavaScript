const weekDay = function() {
    const names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    return {
        name(number) { return names[number]; },
        number(name) { return names.indexOf(name); }
    };
}();
console.log(weekDay.name(weekDay.number("Sunday")));

const x = 1;
function evalAndReturnX(code) {
    eval(code);
    return x;
}
console.log(evalAndReturnX("var x = 2"));
console.log(x);

const {formatDate} = require("./format-date");
console.log(formatDate(new Date(2019, 8, 13), "dddd the Do"));

// 最小形式定义require，解析require的原理

require.cache = Object.create(null);
function require(name) {
    if (!(name in require.cache)) {
        let code = readFile(name);
        let module = { exports: {} };
        require.cache[name] = module;
        let wrapper = Function("require, exports, module", code);
        wrapper(require, module.exports, module);    // 将code执行后的exports对象赋给module.exports绑定，将module对象赋给module绑定，通常二选一
    }
    return require.cache[name].exports;    // 最终导入的都在require.cache中 ，因为是个对象，所以 const {xx} = require("XXX")
}