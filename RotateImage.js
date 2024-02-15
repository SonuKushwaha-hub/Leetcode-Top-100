var rotate = function (matrix) {
  const n = matrix.length;
  // make the matrix transpose of itself
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
    }
  }
  // reverse each row
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
};

// test code
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
rotate(matrix);
console.log(matrix);