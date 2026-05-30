let str = "GeeksforGeeks";

function frequencyCounter(str){
 let hash = {};

//  for(let i = 0; i< str.length; i++){
//     if(!hash[str[i]]){
//         hash[str[i]] = 1;
//     }else{
//         hash[str[i]]++
//     }
//  }

 for(let ch of str){
    if(!hash[ch]){
        hash[ch] = 1;
    }else{
        hash[ch]++
    }
 }
 console.log(hash)
}

frequencyCounter(str)