const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)){return false;}
    let res = [];
    for(let el of members){
        if(typeof(el)=="string"){
          el=el.trim();          
          res.push(el[0].toUpperCase());
        };
    }
    return res.sort().join("");
};
