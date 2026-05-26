let digit = 9474;
sumofdigit(digit);
function sumofdigit(d){
  let sum = 0;
  let newD = d;

  while(newD != 0){
    sum = sum + (Math.pow((newD%10),(String(d).length)));
    newD = Math.floor(newD / 10);
  }
  console.log(sum==d ? true : false)
}