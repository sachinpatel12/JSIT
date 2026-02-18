// Input:  [10, 20, 4, 45, 99]
// Output: 45
// Largest = 99
// Second largest = 45

console.log(secondLargest([10, 10, 10, 10]));


function secondLargest(arr){
    if(arr.length < 1){return 0;}

    let largest = -Infinity;
    let secondLargest = -Infinity;
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > largest){
            secondLargest = largest;
            largest = arr[i];
        } else if(arr[i] != largest && arr[i] > secondLargest){ //important condition is != for same value
            secondLargest = arr[i];
        }
    }
    if(secondLargest == -Infinity){
        return 'No second largest'
    }
    return secondLargest;
}

