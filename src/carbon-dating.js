const CustomError = require("../extensions/custom-error");
module.exports = function dateSample(string) {
const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
let param = parseFloat(string);

  if(typeof string == 'string' &&  param>0 && param<=15){    
      return  Math.ceil((Math.log(MODERN_ACTIVITY/(param)))/(0.693/HALF_LIFE_PERIOD));     
  }
  return false;
};
