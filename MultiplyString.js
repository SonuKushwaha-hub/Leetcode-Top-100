var multiply = function (num1, num2) {
  // initial case checks
  if (num1 == "0" || num2 == "0") return "0";
  if (num1 == "1") return num2;
  else if (num2 == "1") return num1;

  // working with array to store the multiplication of num1 & num2
  let v = new Array(num1.length + num2.length).fill(0);
  // start from back keep updating in array-v
  for (let i = num1.length - 1; i >= 0; i--) {
    for (let j = num2.length - 1; j >= 0; j--) {
      let p = (num1[i]) * (num2[j]) + (v[i + j + 1]);
      v[i + j + 1] = p % 10;
      v[i + j] += Math.floor(p / 10);
    }
  }

  // skip the initial 0-values and return in string
  for (let i = 0; i < v.length; i++) {
    if (v[i] !== 0) return v.slice(i).join("");
  }
};

// test code
const num1 = "123", num2 = "456";
console.log(multiply(num1, num2));