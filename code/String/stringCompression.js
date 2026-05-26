let chars = ["a","a","b","b","c","c","c"];


console.log(stringCompression(chars));
function stringCompression(str){
    let hash = {};
    for(let i = 0; i < str.length; i++){
        if(!hash[str[i]]){
            hash[str[i]] = 1;
        }else{
            hash[str[i]]++;
        }
    }

    let newStr = '';
    for(keys in hash){
        newStr = newStr.concat(keys).concat(hash[keys]);
        
    }

    return newStr;
}