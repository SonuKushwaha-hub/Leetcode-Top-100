var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) return 0;
  let st = new Set();
  let j = 0, maxi = 1;
  for (let i = 0; i < s.length; i++) {
      if (st.has(s[i])) {
          while (st.has(s[i])) {
              st.delete(s[j++]);
          }
      }
      st.add(s[i]);
      maxi = Math.max(maxi, i - j + 1);
  }
  return maxi;
};

const s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));