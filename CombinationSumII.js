var func = (id, target, nums, ans, temp) => {
  // if target is reached, store the temp array in ans
  if (target === 0) {
    ans.push(temp);
    return;
  }
  for (let i = id; i < nums.length; i++) {
    // skip same elements
    if (i > id && nums[i] === nums[i - 1]) continue;
    // iterate through each possibility to ad up to target
    if (nums[i] <= target) {
      temp.push(nums[i]);
      // recalling function to perform recurrsion
      func(i + 1, target - nums[i], nums, ans, temp);
      temp.pop();
    }
  }
}

var combinationSum2 = function (candidates, target) {
  let ans = new Array();
  let temp = new Array();
  // sort array to skip same combinations
  candidates.sort(function (a, b) { return a - b });
  // call recurrsion function
  func(0, target, candidates, ans, temp);
  return ans;
};

// test code
const arr = [10, 1, 2, 7, 6, 1, 5];
console.log(combinationSum2(arr, 8));