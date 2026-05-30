let arr = [1, [2, 3], [4, [5, 6]], 7];

console.log(flattenArray(arr));

function flattenArray(arr){
  let result = [];
  
  for(let item of arr){
    
    if(Array.isArray(item)){

        result.push(...flattenArray(item))
    }else{
     
        result.push(item)
    }
  }
  return result;
}