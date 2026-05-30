let str = "ab12cd34";

console.log(reverseOnlyChar(str));
function reverseOnlyChar(str){
    let arr = str.split('')
    let P1 = 0;
    let P2 = arr.length -1;

    while(P1 < P2){
     if(!(arr[P1] >= 'a' && arr[P1] <= 'z' || arr[P1] >= 'A' && arr[P1] <= 'Z')){
        P1++;
     }else if(!(arr[P2] >= 'a' && arr[P2] <= 'z' || arr[P2] >= 'A' && arr[P2] <= 'Z')){
        P2--;
     }else{
        let temp = arr[P1];
        arr[P1] = arr[P2];
        arr[P2] = temp;
        P1++;
        P2--;
     }
    }
    return arr.join('');
}