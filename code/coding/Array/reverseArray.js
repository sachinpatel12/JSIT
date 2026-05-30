//Reverse an array but only till given index like reverse from 4,7th index or 0 to last index 

//eg. [1,2,3,4,5,6,7] reverse(arr, startIndex, endIndex)




var arr = [1,2,3,4,5,6,7]; 

function reverseArr(arr, startIndex, endIndex){
    if(arr.length < 1){return arr;}

    while(startIndex <= endIndex ){
      let temp = arr[startIndex];
      arr[startIndex] = arr[endIndex];
      arr[endIndex] = temp;
      startIndex++;
      endIndex--;

    }
    return arr;
}

// console.log(reverseArr(arr, 0, arr.length-1))
// console.log(reverseArr(arr, 0, 3))
// console.log(reverseArr(arr, 4, arr.length-1))


function rotateArray(arr, times){
  let rotationTime = times % arr.length;
  
  reverseArr(arr, 0, arr.length-1);
  reverseArr(arr, 0, rotationTime - 1);
  reverseArr(arr, rotationTime, arr.length-1);

  console.log(arr)


}

rotateArray(arr, 17)