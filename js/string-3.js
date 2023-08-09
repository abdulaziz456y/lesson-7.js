let char = ")";

let charPos = char.codePointAt();

console.log(String.fromCharCode(charPos - 1));
console.log(String.fromCharCode(charPos + 1));