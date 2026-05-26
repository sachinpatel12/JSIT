// You are given an array containing only 0s, 1s, and 2s.

// Your task is to sort the array in-place such that:

// All 0s come first

// Then all 1s

// INPUT:[2,0,2,1,1,0]
// OUTPUT:[0,0,1,1,2,2]

console.log(dutchNationalFLag([2,0,2,1,1,0]))
function dutchNationalFLag(arr){
    if(arr.length == 0){return arr};

    let hash = {};
    let newArr = [];
    for(let i = 0; i<arr.length; i++){
        if(hash[arr[i]] == undefined){
            hash[arr[i]] = 1
        }else{
            hash[arr[i]]++
        }
    }
    console.log(hash)
    for(let j = 0; j< 3; j++){
        for(let count = 1; count <= hash[j]; count++){
            newArr.push(j);
        }
    }
    return newArr;
 
}