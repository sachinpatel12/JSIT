// INPUT:
// arr1 = [1,3,5,7,8,9,11,26]
// arr2 = [2,4,6] 

// Output:
// [1,2,3,4,5,6,7,8,9,11,26]

let arr1 = [1, 3, 5, 7, 8, 9, 11, 26];
let arr2 = [2, 4, 6];

console.log(mergeArr(arr1, arr2));

function mergeArr(arr1, arr2) {
    let len = arr1.length + arr2.length;

    let P1 = 0;
    let P2 = 0;
    let arr3 = [];

    for (let i = 0; i < len; i++) {
        console.log(arr3)
        if (P1 < arr1.length || P2 < arr2.length) {
            if (P1 < arr1.length && (P2 > arr2.length - 1 || arr1[P1] < arr2[P2])) {
                arr3.push(arr1[P1]);
                P1++;
            } else if (P2 < arr2.length && (P1 > arr1.length -1 || arr2[P2] < arr1[P1])) {
                arr3.push(arr2[P2])
                P2++;
            }
        }
        
            
        

    }
    return arr3;
}