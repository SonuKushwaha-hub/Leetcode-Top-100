var myAtoi = function (s) {
  // parseInt satisfies all the rquired algorithm checks
  let res = parseInt(s) ? parseInt(s) : 0;

  // checking for values exceeding 32-bit limits
  if (res > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
  else if (res < -1 * Math.pow(2, 31)) return -1 * Math.pow(2, 31);
  else return res;
};

// testing code
const s = "-4193 with words";
console.log(myAtoi(s));