var searchRange = function (nums, target) {
  let Tleft = find(target, nums);
  // if target is not found return [-1,-1]
  if (Tleft === nums.length || nums[Tleft] !== target) return [-1, -1];
  // if target is found, search for target+1 and return index-1
  return [Tleft, find(target + 1, nums, Tleft) - 1];
};

var find = (target, nums, left = 0) => {
  // binary search
  let right = nums.length - 1;
  while (left <= right) {
    // left shift ( equivalnet to divide by 2 );
    let mid = left + right >> 1;
    if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return left;
}

// test code
const nums = [5,7,7,8,8,10], target = 8;
console.log(searchRange(nums,target));