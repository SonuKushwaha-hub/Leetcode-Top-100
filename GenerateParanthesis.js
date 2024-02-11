var DP = (s, l, r, n, ans) => {
  // return if left(l) exceed size(n)
  if (l > n) return;
  // push answer when l & r === n
  if (l == n && r == n) {
    ans.push(s);
  }
  else {
    // call DP on left paranthesis
    DP(s + "(", l + 1, r, n, ans);
    if (l > r) {
      // call DP on right paranthesis
      DP(s + ")", l, r + 1, n, ans);
    }
  }
}

var generateParenthesis = function (n) {
  let ans = new Array();
  // check zero condition
  if (n === 0) return ans;
  // calling dynamic programming function
  DP("", 0, 0, n, ans);
  return ans;
};

// test code
console.log(generateParenthesis(4));