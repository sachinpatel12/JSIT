
let str = '{{{[[]]}}}';

function validParanthesis(str){
// let arr = str.split('');
let stack = [];
 for(let ch of str){
    if((ch === "{") || (ch === "[") || (ch === '(') ){
        console.log
      stack.push(ch)
    }else{
        stack.pop();
    }
 }
 console.log(stack)
 return stack.length ? false : true;
}

console.log(validParanthesis(str) );