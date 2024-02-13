var searchInsert = function (nums, target) {
  // impelement basic binary search,
  // without returning mid to satisfy required condition of insertion
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    let mid = left + right >> 1;
    if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return left;
};

// test code
const nums = [1,3,5,6], target=2;
console.log(searchInsert(nums,target));