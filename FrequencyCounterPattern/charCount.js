function charCount(str) {
  const obj = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      obj[char] = obj[char] + 1 || 1;
    }
  }
  return obj;
}

console.log("charCount: ", charCount("Hello WORLD hi!"));

function charCount2(str) {
  const obj = {};
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = obj[char] + 1 || 1;
    }
  }
  return obj;
}

function isAlphaNumeric(char) {
  var code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upperalpha (A-Z)
    !(code > 96 && code < 123)
  ) {
    // alower alpha (a-z)
    return false;
  }
  return true;
}

console.log("charCount2: ", charCount2("Hello WORLD hi!"));
