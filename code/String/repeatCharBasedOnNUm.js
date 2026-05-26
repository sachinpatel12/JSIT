let chars = "a5b2c6d9";


repeatChar(chars);

function repeatChar(str) {
    let strNew = '';
    let currChar = '';
    let currNum = 0;
    for (let ch of str) {
        if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
            currChar = ch;
        } else {
            currNum = Number(ch);
                // for (let i = 0; i < Number(ch); i++) {
                //     strNew = strNew.concat(currChar)
                // }

                 strNew = strNew.concat(currChar.repeat(currNum));
            


        }
    }

    console.log(strNew);
}