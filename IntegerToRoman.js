var intToRoman = function (num) {
  // string roman values in arrays of ones, tens, hundreds & thousands
  let ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  let tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  let hrns = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  let ths = ["", "M", "MM", "MMM"];

  // calculate index of each arrays to be added to form Roman value of given number
  let ans = ths[Math.floor(num / 1000)] + hrns[Math.floor((num % 1000) / 100)] + tens[Math.floor((num % 100) / 10)] + ones[num % 10];
  return ans;
};

// test code
const num =1994;
console.log(intToRoman(num));