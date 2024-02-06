var convert = function (s, numRows) {
  if (numRows === 1) return s;
  let table = new Array(numRows).fill("");
  let start = true, ptr = 0;
  for (let i = 0; i < s.length; i++) {
      if (ptr === 0) start = true;
      if (ptr === numRows - 1) start = false;

      if (start) {
          table[ptr] += s[i];
          ptr++;
      }
      else {
          table[ptr] += s[i];
          ptr--;
      }
  }
  return table.join("");
};

const s = "PAYPALISHIRING";
const numRows = 3;
console.log(convert(s, numRows));