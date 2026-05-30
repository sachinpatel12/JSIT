let str = 'saachhiinnppaatellss';


function removeDuplicate(str){
 let hash = {};
 let strres = '';

 for(let i =0; i < str.length ; i++){
    if(!hash[str[i]]){
        hash[str[i]] = 1;
        strres = strres + str[i]; //main optimization here

    }
 }
console.log(strres)
 //console.log(Object.keys(hash).join(''))
}

removeDuplicate(str);