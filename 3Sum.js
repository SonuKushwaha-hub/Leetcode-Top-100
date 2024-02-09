var threeSum = function (nums) {
  let ans = new Array();
  // sort the array in ascending order
  nums.sort(function (a, b) { return a - b });

  for (let i = 0; i < nums.length - 2; i++) {
    // skip the same values to avoid repetation
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1, right = nums.length - 1, target = 0 - nums[i];
    while (left < right) {
      let sum = nums[left] + nums[right];
      if (sum < target) {
        // skip the same values to avoid repetation
        while (left < right && nums[left] === nums[left + 1]) left++;
        left++;
      }
      else if (sum > target) {
        // skip the same values to avoid repetation
        while (right > left && nums[right] === nums[right - 1]) right--;
        right--;
      }
      else {
        ans.push([nums[i], nums[left], nums[right]]);
        // skip the same values to avoid repetation
        while (left < right && nums[left] === nums[left + 1]) left++;
        left++;
        // skip the same values to avoid repetation
        while (right > left && nums[right] === nums[right - 1]) right--;
        right--;
      }
    }
  }
  return ans;
};

// test code
const nums = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4];
console.log(threeSum(nums));
