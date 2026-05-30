// INPUT : [10,20,30,-10.-20.-30,100,-100,-50,1,2,3,95,100]
// OUTPUT : 201 -   1,2,3,95,100 is max sub array

//console.log(maxSubArraySum([10,20,30,-10,-20,-30,100,-100,-50,1,2,3,95,100]));

console.log(kedansAlgo([10,20,30,-10,-20,-30,100,-100,-50,1,2,3,95,100]));
console.log(kedansAlgo([-10,-20,-30,-1,-1,-30,-100,-50]));
//kedans algo
function kedansAlgo(arr){
    if(arr.length == 0){return arr;}
    let maxSum = -Infinity;
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
        maxSum= Math.max(sum, maxSum);
        //when sum become - means we can not have max greate if it is negtive as it will only reduce the value like -10,10,20,-100 in this case -10 we can conside becaise that will not become zero but in -100 it will make our sum negrtive
        if(sum < 0){
            sum = 0;
        }

    }
    return maxSum;
}

//bruteforce
function maxSubArraySum(arr){
 let maxSum = -Infinity;
 
 for(let i = 0; i< arr.length; i++){
    let sum = 0;
    for(let j = i; j < arr.length; j++){
         sum = sum + arr[j];
         maxSum = Math.max(sum, maxSum);
    }
 } 
 return maxSum;
}