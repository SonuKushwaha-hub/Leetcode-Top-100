var DPfunction = (id, digits, mp, ans, temp) => {
  // ending case of DP where index(id) exceeds index-range
  if (id === digits.length) {
    ans.push(temp);
    return;
  }
  // get array of respective character to the number at index(id)
  const ss = mp.get(digits[id]).split("");
  for (let ch of ss) {
    // call DP with index+1 and updated string(temp)
    DPfunction(id + 1, digits, mp, ans, temp + ch);
  }
}
var letterCombinations = function (digits) {
  let ans = new Array();

  // store the value of numpad-combination in Map
  let mp = new Map([
    ["2", "abc"],
    ["3", "def"],
    ["4", "ghi"],
    ["5", "jkl"],
    ["6", "mno"],
    ["7", "pqrs"],
    ["8", "tuv"],
    ["9", "wxyz"]
  ]);

  // initial check for empty digits
  if (digits.length === 0) return ans;
  // call dynamic function
  DPfunction(0, digits, mp, ans, "");
  return ans;
};

// test code
const digits = "23";
console.log(letterCombinations(digits));