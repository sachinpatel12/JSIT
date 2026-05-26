let digit = 1234561;
sumofdigit(digit);
function sumofdigit(d){
  let sum = 0;
  let newD = d;

  while(newD != 0){
    sum = sum + (newD%10);
    newD = Math.floor(newD / 10);
  }
  console.log(sum)
}