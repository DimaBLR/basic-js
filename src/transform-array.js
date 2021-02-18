const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw new Error('Not implemented');
    let NewArr = [];

    for (let n = 0; n < arr.length; n++) {
        switch (arr[n]) {
            case '--discard-next':
                n += 1;
                break;
            case '--discard-prev':
                if (NewArr.length !== 0 && arr[n - 2] !== '--discard-next') { NewArr.pop(); }
                break;
            case '--double-next':
                if (n < arr.length - 1) { NewArr.push(arr[n + 1]); }
                break;
            case '--double-prev':
                if (n !== 0 && arr[n - 2] !== '--discard-next') { NewArr.push(arr[n - 1]); }
                break;
            default:
                NewArr.push(arr[n]);
        }
    }
    return NewArr;
};
