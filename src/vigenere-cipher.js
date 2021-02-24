function crypt(str, key, cipher, reverse) {
  let a = "A".charCodeAt(0), z = "Z".charCodeAt(0), i = 0;
    str = str.toUpperCase().split("").map(it => {
      if (it.charCodeAt(0) < a || it.charCodeAt(0) > z) return it;
      return String.fromCharCode(a + (it.charCodeAt(0) - a + (cipher ? 1 : -1) *
          (key.toUpperCase().charCodeAt(i++ % key.length) - a) + (z - a + 1)) % (z - a + 1));
    });
      if (reverse) str.reverse();
      return str.join("");
}

class VigenereCipheringMachine {
  constructor(direct) {
    this.reverse = direct == false;
  }
  encrypt(str, key) {
    return crypt(str, key, true, this.reverse);
  }
  decrypt(str, key) {
    return crypt(str, key, false, this.reverse);
  }
}

module.exports = VigenereCipheringMachine;
