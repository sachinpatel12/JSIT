let str = 'abcdak';
longestSubStringLength(str);
function longestSubStringLength(str){
   let P1 = P2 = 0;
   let maxWindow = 0;
   let map = {};
   while(P2 < str.length){
    //if we got the same character lets increase the i to next char so new window will be created 
    if(map[str[P2]] != undefined && map[str[P2]] >= P1){
        P1 = map[str[P2]] + 1;
    }
    map[str[P2]] = P2;

    let curWS = (P2 - P1) + 1;
    maxWindow = Math.max(maxWindow, curWS)// window length
    P2++;
   }
   console.log(map)
   console.log(maxWindow)
}