var removeDuplicates = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    // skip the repeating elemnets
    if (i<nums.length-1 && nums[i] === nums[i + 1]) continue;
    // swap nums[i] with nums[j] and incrment j-index
    [nums[i], nums[j]] = [nums[j], nums[i]];
    j++;
  }
  return j;
};

// test code
const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let size = removeDuplicates(nums);
// print only frist k-elements
for (let i = 0; i < size; i++) {
  process.stdout.write(nums[i] + " ");
}