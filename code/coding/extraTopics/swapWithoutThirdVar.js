//Input: a = 2, b = 3
//Output: 3 2
 
// b = 3+2 = 5
// a = b - a;
// b = b - a;


swapNumbers(3,2)
function swapNumbers(a,b){
    console.log("OLD ->" , "a - ",a,'b - ',b)
//   b = a + b; // 5
//   a = b - a;
//   b = b - a;

  [a,b] = [b,a]
  console.log("NEW ->" , "a - ",a,'b - ',b)
}