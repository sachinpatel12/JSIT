// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

reverseString(["h", "e", "l", "l", "o"]);
function reverseString(strArr) {
    if (strArr.length <= 1) { }
    try {
        let len = strArr.length;
        let halfLength = Math.floor(strArr.length / 2)
        for (let i = 0; i < halfLength; i++) {
            let temp = strArr[i];
            strArr[i] = strArr[len - 1 - i];
            strArr[len - 1 - i] = temp;
        }
        console.log("strArr ",strArr)

    } catch (err) {
        console.log(err)
    }
}