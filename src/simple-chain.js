const CustomError = require("../extensions/custom-error");

const chainMaker = {
    chain: [],
    getLength() {
        return this.chain.length;
    },
    addLink(value = '()') {
        this.chain.push(value);
        return this;
    },
    removeLink(position) {
        if (!position || isNaN(position)) {
            this.chain = [];
            throw new Error()
        }
        this.chain.splice(position-1, 1)
        return this
    },
    reverseChain() {
        this.chain.reverse();
        return this;
    },
    finishChain() {
        let res = this.chain.map(item => `( ${item} )`).join('~~');
        this.chain = [];
        return res;
    }
};

module.exports = chainMaker;
