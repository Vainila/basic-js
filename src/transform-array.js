const CustomError = require("../extensions/custom-error");
module.exports = function transform(arr) {
  let cmd = ['--discard-next', `--discard-prev`,`--double-next`,`--double-prev`];  
  if(!Array.isArray(arr)){throw Error;}
  const arrCopy = [...arr];  
  for(let i=0; i<arr.length; i++){
    if(arrCopy[i]==cmd[0]){  
      if(arrCopy[i+1]!=undefined && !cmd.includes(arrCopy[i+1])){
        arrCopy[i+1]=undefined;
      }
    }
    if(arrCopy[i]==cmd[1]){
      if(arrCopy[i-1]!=undefined && !cmd.includes(arrCopy[i-1])){
        arrCopy[i-1]=undefined;
      }
    }
    if(arrCopy[i]==cmd[2]){
      if(arrCopy[i+1]!=undefined && !cmd.includes(arrCopy[i+1])){
        arrCopy[i]=arrCopy[i+1];
      }
    }
    if(arrCopy[i]==cmd[3]){
      if(arrCopy[i-1]!=undefined && !cmd.includes(arrCopy[i-1])){
        arrCopy[i]=arrCopy[i-1];
      }
    }
    if(cmd.includes(arrCopy[i]))arrCopy[i]=undefined;
  }
  let res = [];
  arrCopy.map(elem => elem!=undefined ? res.push(elem) : {})
  return res;
};
