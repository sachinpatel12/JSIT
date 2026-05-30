/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
Input: s = "anagram", t = "nagaram"
Output: true

Input: s = "rat", t = "car"
Output: false

*/

 console.log(isAnagram("asd","asd"));




 function isAnagram(s1, s2) {
    if (s1.length != s2.length) {
        return false;
    }

    let obj = {};

    for (let i = 0; i < s1.length; i++) {
        obj[s1[i]] = (obj[s1[i]] || 0) + 1; //if not exist it will give error so intially it will assign 0
        obj[s2[i]] = (obj[s1[i]] || 0) - 1; //it will either decrease or make the value in negative 
    }

    for(let keys in obj){
        if(obj[keys] != 0){return false};
    }
    return true;

  
}

function isAnagramOLD(s1, s2) {
    if (s1.length != s2.length) {
        return false;
    }

    let obj = {};
    let obj2 = {};

    for (let i = 0; i < s1.length; i++) {
        if (obj[s1[i]] != undefined) {
            obj[s1[i]]++
        } else {
            obj[s1[i]] = 1;
        }
    }

    for (let i = 0; i < s1.length; i++) {
        if (obj2[s2[i]] != undefined) {
            obj2[s2[i]]++
        } else {
            obj2[s2[i]] = 1;
        }
    }


    let keys = Object.keys(obj);

    for(let i = 0; i < keys.length ; i++){
        if(obj[keys[i]] == obj2[keys[i]]){
            continue;
        }else{
            return false;
        }
    }
    return true;
}