var search = function (nums, target) {
  let low = 0, high = nums.length - 1;
  // implementing binary search technique
  while (low <= high) {
      let mid = low + (high - low) / 2;
      if (nums[mid] === target) return mid;

      // if right half is sorted
      if (nums[low] <= nums[mid]) {
          if (target >= nums[low] && target <= nums[mid]) {
              high = mid - 1;
          }
          else low = mid + 1;
      }
      // if right half  is sorted
      else {
          if (target <= nums[high] && target >= nums[mid]) {
              low = mid + 1;
          }
          else high = mid - 1;
      }
  }
  return -1;
};

// test code
console.log(search([4,5,6,7,0,1,2],0));