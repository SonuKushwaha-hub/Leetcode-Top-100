var twoSum = function(nums, target) {
  //using map datastructure to keep timeCoplexity and spaceComplexity to O(n)
  const mp = new Map();
  for(let i=0;i<nums.length;i++){
      const diff = target - nums[i];
      if(mp.has(diff)) return [i,mp.get(diff)];

      mp.set(nums[i],i);
  }
};

//testing code
const nums = [2,7,11,15];
const target = 9;
console.log(twoSum(nums,target));