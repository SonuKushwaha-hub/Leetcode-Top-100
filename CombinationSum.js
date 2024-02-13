var func = (arr, target, ans, v, id) => {
  // if target is reached, store the temp array(v) in ans
  if (target === 0) {
    ans.push(v);
    return;
  }
  // iterate through each possibility to ad up to target
  for (let i = id; i < arr.length; i++) {
    if (arr[i] <= target) {
      v.push(arr[i]);
      // recalling function to perform recurrsion
      func(arr, target - arr[i], ans, v, i);
      v.pop();
    }
  }
  return;
}

var combinationSum = function (candidates, target) {
  let ans = new Array();
  let v = new Array();
  // call recurrsion function
  func(candidates, target, ans, v, 0);
  return ans;
};

// test code
const arr = [2, 3, 6, 7], target = 7;
console.log(combinationSum(arr, target));