// Input: s = "A man, a plan, a canal: Panama"
// Output: true

console.log(checkPalindrom("A man, a plan, a canal:    Panama    "));

function checkPalindrom(str1){
    let str = str1.toLowerCase();
    let P1 = 0;
    let P2 = str.length-1;

    while(P1 <  P2){
    if(!str[P1].match(/['a-z0-9']/)){
        P1++
    }else if(!str[P2].match(/[a-z0-9]/)){
        P2--
    }else if(str[P1] != str[P2]){
        return false;
    }else{
        P1++,
        P2--
    }
    }
    return true;
}