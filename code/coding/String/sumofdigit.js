let chars = "abc123xyz789";


stringSepration(chars);
function stringSepration(str){
let nums = 0;
    for(let i = 0; i < str.length; i++){
        if(!isNaN(str[i])){
            nums = nums + Number(str[i]);
        }
    }
   console.log(nums)
}