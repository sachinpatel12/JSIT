// Input : [1,2,3,4,5] K = 2
// Output : [4,5,1,2,3]

console.log(rotateArray([1,2,3,4,5], 7));

function rotateArray(arr, k){
    if(arr.length == 0 || k <= 0){return arr;}

    let totalRotation = k % arr.length; //if total length is 5 and rotation is 7 so after 5 rotation the array will be same so no use of rotating array then the remaining last 2 roatation is important which will impact array so if we do mod it will return that only or if lenght is less it will retun length only. like 4%5 = 4 ;
 console.log("totalRotation ",totalRotation)
    reverse(arr, 0, arr.length-1) //first reverse whole array so it will give [5,4,3,2,1]
    reverse(arr, 0, totalRotation-1) //reverse element which are needed to rotate like first 2 in this case - [4,5,3,2,1]
    reverse(arr, totalRotation, arr.length-1)//now reverse remaining value so now we will reverse 3,2,1 as they are not needed to be opposite position so final array will be [4,5,1,2,3]

    return arr;
}

function reverse(arr, startIndex, endIndex){
   console.log("called with ",arr, startIndex, endIndex);
    //once start index reaced mid pint or greated then the end point break the array why in the 5 array length one time the start and end will be in same position but when the array lenght is even they will cross so < constion is best
    while(startIndex < endIndex)
    {
        let temp = arr[startIndex];
        arr[startIndex] = arr[endIndex];
        arr[endIndex]= temp;
        startIndex++;
        endIndex--;
        
    }
}