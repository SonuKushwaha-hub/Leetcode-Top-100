var permuteUnique = function (nums) {
  // sort array to skip repetation
  nums.sort((a, b) => a - b)
  let res = []

  // define fuction to call recursively
  let iterate = (arr, temp) => {
    // initial retun case
    if (arr.length == 0) {
      res.push(temp)
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == arr[i - 1]) continue;
      // use filter to filter the non-identical element and add it to temp
      iterate(arr.filter((num, idx) => idx != i), [...temp, arr[i]])
    }
  }

  // call the recursive function
  iterate(nums, [])
  return res
};

// test code
console.log(permuteUnique([1, 1, 2]));