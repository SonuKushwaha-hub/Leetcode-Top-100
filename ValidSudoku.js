var isValidSudoku = function (board) {
  const rows = [];
  const cols = [];
  const boxes = [];
  for (let i = 0; i < 9; i++) {
      rows[i] = new Set();
      cols[i] = new Set();
      boxes[i] = new Set();
  }

  for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
          const val = board[i][j];
          if (val !== '.') {
              if (rows[i].has(val) || cols[j].has(val) || boxes[Math.floor(i / 3) * 3 + Math.floor(j / 3)].has(val)) {
                  return false;
              } else {
                  rows[i].add(val);
                  cols[j].add(val);
                  boxes[Math.floor(i / 3) * 3 + Math.floor(j / 3)].add(val);
              }
          }
      }
  }
  return true;
};

// test code
board =[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
];
console.log(isValidSudoku(board));