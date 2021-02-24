const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    if(!options.additionSeparator) options.additionSeparator = '|';
    if(!options.separator) options.separator = '+';    
    if(options.addition === null) options.addition = 'null'
    
    return new Array(options.repeatTimes).fill(str + new Array(options.additionRepeatTimes)
        .fill(options.addition).join(options.additionSeparator)).join(options.separator);

};
