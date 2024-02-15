var myPow = function (x, n) {
  let ans = 1, pow = n;
  // if n is negative, process it as positive
  if (n < 0) pow = Math.abs(n);
  while (pow > 0) {
    // for odd pow, multiply ans with x-value and reduce pow by 1
    if (pow % 2 == 1) {
      ans *= x;
      pow--;
    }
    // for evel pow, square the x-value, reduce the power
    else {
      x *= x;
      pow /= 2;
    }
  }
  // if n was negative, update the answer as 1/ans;
  if (n < 0) ans = 1 / ans;
  return ans;
};

// test code
console.log(myPow(2.0000,10));