var trap = function (nums) {
  let n = nums.length;
  // define two arrays to store max-value from left and right direction
  let left = new Array(n);
  let right = new Array(n);
  left[0] = nums[0], right[n - 1] = nums[n - 1];
  // store max-value from left of array in array-left
  for (let i = 1; i < n; i++) {
    left[i] = Math.max(left[i - 1], nums[i]);
  }
  // store max-value from right of array in array-right
  for (let i = n - 2; i >= 0; i--) {
    right[i] = Math.max(right[i + 1], nums[i]);
  }

  // adding all values of water trapped by taking minimum of left[i] & right[i]
  // and subtracting nums[i] before adding to sum
  let sum = 0;
  for (let i = 0; i < n; i++) {
    let mini = Math.min(left[i], right[i]);
    sum += mini - nums[i];
  }
  
  return sum;
};

// test code
const arr =[0,1,0,2,1,0,1,3,2,1,2,1];
console.log(trap(arr));