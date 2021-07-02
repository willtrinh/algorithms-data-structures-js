function sameFrequency(num1, num2) {
  // convert numbers to strings
  num1 = num1.toString();
  num2 = num2.toString();
  if (num1.length !== num2.length) return false;
  let freqCounter = {};
  // loop through num1 and count frequency of digits
  for (const digit of num1) {
    freqCounter[digit] = freqCounter[digit] + 1 || 1;
  }
  // loop through num2
  for (const digit of num2) {
    // if digit does not exist, return false
    if (!freqCounter[digit]) {
      return false;
    }
    // decrement frequency of digit by 1 if exist
    freqCounter[digit] -= 1;
  }
  return true;
}
