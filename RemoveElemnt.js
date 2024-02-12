var removeElement = function (nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    // count the occuring of va
    if (nums[i] === val) ++k;
    else {
      // swap the i-the value with i-kth value
      [nums[i], nums[i - k]] = [nums[i - k], nums[i]];
    }
  }
  // return the size of answer without the val-value
  return nums.length - k;
};

// test code
const nums = [0,1,2,2,3,0,4,2];
const k  = removeElement(nums,2);
// print only k-elements from modified array
for(let i=0;i<k;i++){
  process.stdout.write(nums[i]+" ");
}