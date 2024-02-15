var func = (it, nums, dp) => {
  // initial check for DP
  if (it === nums.length - 1) return 0;

  // memorization in DP
  if (dp[it] !== -1) return dp[it];

  // implement mini to update dp[it]
  let mini = 1e9;
  for (let i = 1; i <= nums[it]; i++) {
    if (it + i >= nums.length) break;
    mini = Math.min(mini, func(it + i, nums, dp));
  }
  return dp[it] = 1 + mini;

}
var jump = function (nums) {
  // initialize dp-array with initial value as -1;
  let dp = new Array(nums.length + 1).fill(-1);
  // calling DP-function
  return func(0, nums, dp);
};

// test code
const nums = [2,3,1,1,4];
console.log(jump(nums));