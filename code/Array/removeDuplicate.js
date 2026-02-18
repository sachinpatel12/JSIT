// Input:  [1, 2, 3, 2, 4, 1, 5]
// Output: [1, 2, 3, 4, 5]

function removeDuplicate(arr){
 if(arr.length <= 0){return [];}
 let obj = {};
 let arr2 = [];
 for(let i = 0; i < arr.length ; i++){
    if(obj[arr[i]]){
        continue;
    }else{
        obj[arr[i]] = 1;
        arr2.push(arr[i]);
    }
 }
 console.log(arr2)
}


removeDuplicate([1, 2, 3, 2, 4, 1, 5]);