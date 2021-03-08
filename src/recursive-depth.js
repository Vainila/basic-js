const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  
  calculateDepth(array) {
    
    if(Array.isArray(array)){
      if(array[0]==undefined){
        return 1;
      }
      else{
      return 1+Math.max(...array.map(x=>this.calculateDepth(x)));
      }
    }else{
      return 0;
    }
  }
};
