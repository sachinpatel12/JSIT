

let digit = 1234561;
reverseNum(digit);
function reverseNum(d){
  let sum = '';
  let newD = d;

  while(newD != 0){
    sum = sum.concat((newD%10));
    newD = Math.floor(newD / 10);
  }
  console.log(sum)
}