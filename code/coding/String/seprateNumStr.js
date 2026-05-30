let chars = "abc123xyz789";


stringSepration(chars);
function stringSepration(str){
let strNew = '';
let nums = '';
    for(let i = 0; i < str.length; i++){
        if(!isNaN(str[i])){
            nums = nums.concat(str[i]);
        }else{
            strNew = strNew.concat(str[i]);
        }
    }

   console.log(strNew);
   console.log(nums)
}