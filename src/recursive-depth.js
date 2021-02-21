const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let d = 0;
            if (Array.isArray(arr)) {
                for (let key of arr) {
                    d = Math.max(d, this.calculateDepth(key));
                }
                d++;
            }
        return d;
    }
};
