var groupAnagrams = function (strs) {
  let map = new Map();
  strs.forEach((value) => {
    // sorted the each string in strs-array
    const sorted = value.split("").sort().join("");
    // if sorted-string is already as key in map, update the value of that key
    if (map.has(sorted)) {
      map.set(sorted, [value, ...map.get(sorted)]);
    }
    // if sorted-string is not in map, append new key-value
    else {
      map.set(sorted, [value]);
    }
  });

  // store each value from Map to return as answer
  const ans = new Array();
  map.forEach((value) => {
    ans.push(value);
  })
  return ans;
};

// test code
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));