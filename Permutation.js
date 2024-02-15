var permute = function (nums) {
  let res = []

  // define fuction to call recursively
  let iterate = (arr, temp) => {
    // initial retun case
    if (arr.length == 0) {
      res.push(temp)
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      // use filter to filter the non-identical element and add it to temp
      iterate(arr.filter((num, idx) => idx != i), [...temp, arr[i]])
    }
  }

  // call the recursive function
  iterate(nums, [])
  return res
};

// test code
console.log(permute([1, 2, 3]));