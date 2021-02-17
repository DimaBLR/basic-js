const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
let number = 0;

for (let key of backyard) {
    for (let key2 of key) {
       if (key2 == '^^') number += 1;
    }
}

return number;
};
