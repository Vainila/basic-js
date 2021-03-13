const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  alphabet= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  constructor (value){
    if(value===false){
      this.type = 'revert';
    }else{
      this.type = 'regular';
    }
  }
  fillKeytoSequenceLength (seq, key){
    while(key.length<seq.length){

      key+=key;
    }return key.substring(0, seq.length);
  }
  encrypt(message, key) { 
    
    if(!message || !key){throw Error;}

    console.log(`type: ${this.type}, msg: ${message}, key: ${key}`)
    message=message.toLowerCase();
    let msgNoSpaces = message.split(" ").join("");
    key = key.toLowerCase();
    let keyseq = this.fillKeytoSequenceLength(msgNoSpaces, key);
    let msgcodes = msgNoSpaces.split('').map(symbol=>{
      if(this.alphabet.includes(symbol)){
        return this.alphabet.indexOf(symbol)
      }else{
        return symbol
      }
    });
    let keycodes = keyseq.split('').map(symbol=>this.alphabet.indexOf(symbol));
    let res = [];
    for(let i = 0; i< msgcodes.length; i++){
      if(this.alphabet.includes(msgNoSpaces[i])){
        let sum = msgcodes[i]+keycodes[i];
        if(sum>=26){res.push(sum-26)}else{res.push(sum)}
     }else{res.push(msgcodes[i]);}
    }
    res = res.map(symbol=>{
      if(typeof symbol==='number'){
        return this.alphabet[symbol]
      }else{return symbol}
    });
    for(let i = 0; i< message.length; i++){
      if(message[i]==' '){
        res.splice(i, 0, " ");
      }
    }
    if(this.type == "revert"){res=res.reverse();}


    res= res.join('').toUpperCase();
    console.log(`res= ${res}`)
    return res;
  }    
  decrypt(message, key) {
    if(!message || !key){throw Error;}
    console.log(`type: ${this.type}, msg: ${message}, key: ${key}`)
    message=message.toLowerCase();
    let msgNoSpaces = message.split(" ").join("");
    key = key.toLowerCase();
    let keyseq = this.fillKeytoSequenceLength(msgNoSpaces, key);
    let msgcodes = msgNoSpaces.split('').map(symbol=>{
      if(this.alphabet.includes(symbol)){
        return this.alphabet.indexOf(symbol)
      }else{
        return symbol
      }
    });
    
    let keycodes = keyseq.split('').map(symbol=>this.alphabet.indexOf(symbol));
    let res = [];
    for(let i = 0; i< msgcodes.length; i++){
      if(this.alphabet.includes(msgNoSpaces[i])){
        let sub = msgcodes[i]-keycodes[i];
        if(sub<=0){res.push(sub+26)}else{res.push(sub)}
     }else{res.push(msgcodes[i]);}
    }
    res = res.map(symbol=>{
      if(typeof symbol==='number'){
        return this.alphabet[symbol]
      }else{return symbol}
    });
    for(let i = 0; i< message.length; i++){
      if(message[i]==' '){
        res.splice(i, 0, " ");
      }
    }
    if(this.type == "revert"){res=res.reverse();}
    res= res.join('').toUpperCase();
    console.log(`res= ${res}`)
    return res;
  }
}

module.exports = VigenereCipheringMachine;
