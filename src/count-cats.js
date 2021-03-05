const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let counter = 0;
  matrix.map(x=> x.map(el=>{
    if(el==="^^")counter++
  }));
  return counter; 
};