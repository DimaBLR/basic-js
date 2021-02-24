const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    if(!options.separator) options.separator = '+';
    if(!options.additionSeparator) options.additionSeparator = '|';
    if(options.addition === null) options.addition = 'null';
    if(str === null) str = 'null';
    if (options.additionRepeatTimes == undefined) {options.additionRepeatTimes = 1;}
    if (options.repeatTimes == undefined) {options.repeatTimes = 1;}

    let arr = [], arr2 = [];
        for (let i = 0 ;i < options.additionRepeatTimes; i++) {
            arr.push(options.addition);
        }
        arr = arr.join(options.additionSeparator).split('');
        arr.unshift(str);
        arr = arr.join('');

        for (let i = 0 ;i < options.repeatTimes; i++) {
            arr2.push(arr);
        }
return arr2.join(options.separator);
};
