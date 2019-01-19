const createChessBoard = (width, height) => {
  let outputStr = "";
  for (let i = 0; i < width; i++) {
    if (!(i % 2)) {
      for (let j = 0; j < height; j++) {
        if (j % 2) {
          outputStr += "#";
        } else {
          outputStr += " ";
        }
      }
    } else {
      for (let j = 0; j < height; j++) {
        if (!(j % 2)) {
          outputStr += "#";
        } else {
          outputStr += " ";
        }
      }
    }
    outputStr += "\n";
  }

  return outputStr;
};

console.log(createChessBoard(8, 8));
