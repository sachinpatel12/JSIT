// Input:  [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Input:  [0,0,0]
// Output: [0,0,0]

console.log(allZerosToEnd([0,1,0,3,12]))

function allZerosToEnd(arr){
    if(arr.length == 0){return []};

    let P1 = 0;
    for(let i = 0; i < arr.length ; i++){
        if(arr[i] != 0){
            arr[P1] = arr[i];
            P1++;
        }
    }

    for(let j = P1 ; j < arr.length ; j++){
        arr[j] = 0;
    }
    return arr;
}
