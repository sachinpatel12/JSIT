// Input:  arr = [2,7,11,15]
// Target: 9
// Output: [0,1]
console.log(twoSum([2, 7, 11, 15], 9));
function twoSum(arr, target) {
    if (arr.length == 0) { return 0 };
    let position = [];
    let hash = {};
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > target) {
            continue;
        }
        let val = target - arr[i];
        //here always check undefined never check like this !hash[val] bacause if hash[val] return zero it will still make cond true
        if (hash[val] == undefined) {
            hash[arr[i]] = i;
        } else {
            position.push(i);
            position.push(hash[val]);
        }
    }
    return position;
}