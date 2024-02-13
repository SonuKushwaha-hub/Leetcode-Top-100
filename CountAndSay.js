var countAndSay = function (n) {
  // initail condition check
  if (n == 1) return "1";
  let s = "11";
  for (let i = 2; i < n; i++) {
      s += '@';
      let t = "";
      let cnt = 1;
      for (let j = 1; j < s.length; j++) {
          // append the count and element in answer string (t)
          if (s[j] != s[j - 1]) {
              t += String(cnt);
              t += s[j - 1];
              cnt = 1;
          }
          // count same elements
          else cnt++;
      }
      // assig new answer (t) into answer (s)
      s = t;
  }
  return s;
};

// test code
console.log(countAndSay(4));