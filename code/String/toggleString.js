
let str = 'SacHInPatel'
toggleString(str);
function toggleString(str){
    let newStr = '';
    for(const ch of str){
        let code = ch.charCodeAt(0);
        if(code >=97 && code <=122){
            newStr += String.fromCharCode(code-32)
        }else if(code >= 65 && code <= 90){
           newStr += String.fromCharCode(code+32)
        }
    }
    console.log(newStr)
}
// console.log(String.fromCharCode(90-20))


// 97 - 122 65-90