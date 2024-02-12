var nextPermutation = function (nums) {
  const n = nums.length;
  for (let i = n - 1; i >= 1; i--) {
    if (nums[i] > nums[i - 1]) {
      for (let j = n - 1; j >= i; j--) {
        if (nums[j] > nums[i - 1]) {
          [nums[j], nums[i - 1]] = [nums[i - 1], nums[j]];
          nums = [...nums.slice(0, i), ...nums.slice(i).reverse()];;
          return;
        }
      }
    }
    // if array isin decreasing order, just reverse the array
    if (i === 1) nums.reverse();
  }
};

// test code
let nums = [1, 1, 5];
nextPermutation(nums);
console.log(nums);