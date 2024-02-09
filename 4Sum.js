var fourSum = function (nums, target) {
  let ans = new Array();
  nums.sort(function (a, b) { return a - b });

  // use double loop with square time-complexity, rest is like 3-sum
  for (let i = 0; i < nums.length-3; i++) {
      for (let j = i + 1; j < nums.length-2; j++) {
          let left=j+1, right=nums.length-1, newTarget = target-nums[i]-nums[j];
          while(left<right){
              let sum = nums[left]+nums[right];
              if(newTarget>sum){
                  while(left<right && nums[left]===nums[left+1]) left++;
                  left++;
              }
              else if(newTarget<sum){
                  while(right>left && nums[right]===nums[right-1]) right--;
                  right--;
              }
              else{
                  ans.push([nums[i], nums[j], nums[left], nums[right]]);
                  while(left<right && nums[left]===nums[left+1]) left++;
                  left++;
                  while(right>left && nums[right]===nums[right-1]) right--;
                  right--;
              }
          }
          while(j+1<nums.length-2 && nums[j]===nums[j+1]) j++;
      }
      while(i+1<nums.length-3 && nums[i]===nums[i+1]) i++;
  }
  return ans;
};

// text code
const nums = [1,0,-1,0,-2,2], target = 0;
console.log(fourSum(nums,target));