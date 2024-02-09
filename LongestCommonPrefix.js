var longestCommonPrefix = function (strs) {
  let s = "";
  // sort the array to get the smallest option in beiginning
  strs.sort();

  for (let i = 0; i < strs[0].length; i++) {
      s += strs[0][i];
      // if last element of answer string doesn't match in each elemnt of array,
      // return the answer string slicing at last element
      for(const str of strs){
          if(str[i] !== s.slice(-1)){
              return s.slice(0,-1);
          };
      }
  }
  return s;
};

// test code
const strs = ["flower","flow","flight"];
console.log(longestCommonPrefix(strs));