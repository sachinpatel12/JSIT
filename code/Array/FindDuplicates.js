// Input:  [1,2,3,4,2,5,1]
// Output: [1,2]

let arr = [1, 2, 3, 4, 2, 5, 1,2,2,2,2];
console.log(findDuplicates(arr));

function findDuplicates(arr) {
    if (arr.length == 0) { return arr };
    let duplicateNum = [];
    let RemoveduplicateNum = [];
    let hash = {};
    for (let i = 0; i < arr.length; i++) {
        if (hash[arr[i]] == undefined) {
            RemoveduplicateNum.push(arr[i]);
            hash[arr[i]] = 1;
        } else {
            hash[arr[i]]++;

            //why 2 because if ant number is more then 2 times then it will be again pushed to array but [5,5,5] in this case we need one value of 5 that is repeated
            if (hash[arr[i]] == 2) {
                duplicateNum.push(arr[i]);
            }

            continue;
        }
    }

    return duplicateNum; //if asked to print duplicate
    // return RemoveduplicateNum; //if asked to remove duplicate
}