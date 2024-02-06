var reverse = function (x) {
  let s = x.toString();
  let arr = s.split("");
  arr.reverse();
  let ans = "";
  if (arr[arr.length - 1] === "-") {
      ans += "-";
      arr.pop();
  }
  for (let num of arr) {
      ans += num;
  }
  
  let k = Number(ans);
  if (k > (Math.pow(2, 31) - 1) || k < -1 * Math.pow(2, 31)) {
      k = 0;
  }
  return k;
};

const x = -123;
console.log(reverse(x));