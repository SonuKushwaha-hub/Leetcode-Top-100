var romanToInt = function (s) {
  // store all Roamn symbols in map
  let mp = new Map();
  mp.set("I", 1);
  mp.set("V", 5);
  mp.set("X", 10);
  mp.set("L", 50);
  mp.set("C", 100);
  mp.set("D", 500);
  mp.set("M", 1000);

  let ans = 0, val = 0, pval = Number.MAX_VALUE;
  for (let i = 0; i < s.length; i++) {
      val = mp.get(s[i]);
      // if new value is less than previous-value, add to answer
      if (val <= pval) ans += val;
      // if new value is greater than previosu-value,
      // the previous-value is subtracted from new value before adding
      // and the previous-value is subtracted again to equalize its addition in previous iteration
      else ans += (val - pval - pval);
      pval = val;
  }
  return ans;
};

// test solution
const s = "MCMXCIV";
console.log(romanToInt(s));