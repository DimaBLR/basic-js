const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let obj1 = {};
    obj1.turns = Math.pow(2, disksNumber) - 1
    obj1.seconds = Math.floor(obj1.turns/turnsSpeed * 3600)
    return obj1;
};
