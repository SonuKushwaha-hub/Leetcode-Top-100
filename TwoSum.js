// timeComplexity = O(n)
// spaceComplexity = O(n)
var twoSum = function(nums, target) {
  const mp = new Map();
  for(let i=0;i<nums.length;i++){
      const diff = target - nums[i];
      if(mp.has(diff)) return [i,mp.get(diff)];

      mp.set(nums[i],i);
  }
};

// testing code on a testCase-1
const nums = [2,7,11,15];
const target = 9;
console.log(twoSum(nums,target));