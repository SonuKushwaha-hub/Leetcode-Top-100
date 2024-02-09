var isPalindrome = function (x) {
  // convert to string and to array of characters
  let arr = x.toString().split("");

  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) return false;
  }
  return true;
};

// testing code
const x = 121;
console.log(isPalindrome(x));