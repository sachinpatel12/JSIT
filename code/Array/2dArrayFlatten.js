let twoDArr = [
  [1,2],
  [3,4],
  [5,6]
];

flattenArray(twoDArr);

function flattenArray(arr){
  let result = [];

  for(let items of arr){
    for(let nextLevel of items){
        result.push(nextLevel)
    }
  }
  console.log(result);
}