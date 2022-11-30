const caesar = function(string, shift) {
    return string
      .split("")
      .map(char => shiftChar(char, shift))
      .join("");
};

function shiftChar(char,shift){
    const code = char.charCodeAt()

    if ((code >= 65 && code <= 90) ||
        (code >= 97 && code <= 122)){
            
            return String.fromCharCode(mod(code + shift - findBase(code), 26) + findBase(code))
    }
    return char
}

const findBase = (code) => (code > 90 ? 97 : 65)
const mod = (n,m) => (((n % m) + m ) % m)
// Do not edit below this line
module.exports = caesar;
