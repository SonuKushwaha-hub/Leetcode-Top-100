var reverse = function (x) {  
	// converting number to string to array and reversing it
  let s = x.toString();
  let arr = s.split("");
  arr.reverse();
	
  let ans = "";
	// applying function to handle negative numbers
  if (arr[arr.length - 1] === "-") {
      ans += "-";
      arr.pop();
  }
  for (let num of arr) {
      ans += num;
  }
  
  let k = Number(ans);
  // checking if answer doesnot exceed the 32-bit integer value
  if (k > (Math.pow(2, 31) - 1) || k < -1 * Math.pow(2, 31)) {
      k = 0;
  }
  return k;
};

// testing code
const x = -123;
console.log(reverse(x));