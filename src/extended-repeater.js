const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options) {
  let result = '';
  
  let tempString='';
  tempString += String(str);
  
  if(options.hasOwnProperty('addition')){
    tempString+= String(options.addition)
  }
  if(options.hasOwnProperty('additionRepeatTimes')){    
    for(let i = options.additionRepeatTimes;i>1; i--){
      tempString+=options.additionSeparator || '|';
      tempString+=String(options.addition);
    }
  }

  if(options.hasOwnProperty('repeatTimes')){
    result+=tempString;
    for(let j = options.repeatTimes; j>1; j--){
      result+=options.separator  || '+';
      result+=tempString;
    }
  }else{
    result+=tempString;
  }
  return result;  
};