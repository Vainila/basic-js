const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {    
    this.arr.push(String(value)|| ' ');
    return this;
  },
  removeLink(position) {
    if(typeof position !== 'number' || this.arr[position]==undefined){
      this.arr = [];
      throw new Error;
    }else{
    this.arr.splice(position-1, 1);
    return this;}
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let res = [];
    for(let elem of this.arr){
      res.push(`( ${elem} )`);
      res.push('~~');
    }
    res.pop();
    this.arr = [];
    return res.join("");    
  }
};

module.exports = chainMaker;
