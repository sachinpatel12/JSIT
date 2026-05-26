let str = '    s     c    h   i   npat    e  l  ';

function removeSpace(str){
    let result = '';
    for(const ch of str){
        if(ch != ' '){
            result = result + ch;
        }
    }
    console.log(result);
}
removeSpace(str)