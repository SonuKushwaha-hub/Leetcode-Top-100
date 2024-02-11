var isValid = function (s) {
  // using araay as stack
  let st = new Array();
  // maping closing paranthesis with their openings respectively
  let mp = new Map([[")", "("], ["}", "{"], ["]", "["]]);

  for (let i = 0; i < s.length; i++) {
    // in case of closing paranthesis, check for opening at the end of array
    if (s[i] === ")" || s[i] === "}" || s[i] === "]") {
      if (st.length === 0) return false;
      else if (st[st.length - 1] === mp.get(s[i])) st.pop();
      else return false;
    }
    else {
      st.push(s[i]);
    }
  }
  // return true iff array is Empty
  return st.length === 0 ? true : false;
};

// test code
const s = "()[]{}";
console.log(isValid(s));