// Input:  [1,2,4,5]
// Output: 3

// Input:  [2,3,1,5]
// Output: 4

//formula = n * (n + 1)/2  
function findMissingNum(arr){
    if(arr.length<=0){return []}
    let len = arr.length + 1;

    let totalSum = Math.floor((len * (len + 1 ))/2);
    console.log(totalSum)
    let arrSum = 0;
    for(let i = 0; i < arr.length ; i++){
        arrSum = arrSum + arr[i];
    }
    return totalSum - arrSum;
}



console.log(findMissingNum([1,2,4,5]));