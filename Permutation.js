var func = (id, nums, ans) => {
  // initial return case in recursion
  if (id === nums.length) {
    ans.push(nums);
    console.log(nums);
    return;
  }

  // resursion loop
  for (let i = id; i < nums.length; i++) {
    // swap element-i with element-id
    [nums[i], nums[id]] = [nums[id], nums[i]];
    // call recursion on next id+1
    func(id + 1, nums, ans);
    // swap back the elements
    [nums[i], nums[id]] = [nums[id], nums[i]];
  }
}

var permute = function (nums) {
  let ans = new Array();
  // call recursion function
  func(0, nums, ans);
  return ans;
};

// test code
permute([1,2,3]);