let chars = "abc123xyz789";


alphabetCounter(chars);
function alphabetCounter(str){
let strNewCount = 0;
    for(let ch of str){
        if((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')){
            strNewCount = strNewCount + 1;
        }
    }

   console.log(strNewCount);
}