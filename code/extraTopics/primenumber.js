let num = 15;

console.log(checkPrime(num));

function checkPrime(num){
    if((num < 2)||(num%2 == 0)){return false}

    let limit = Math.sqrt(num); //if we calculate sq root this means 36-6 6 if 6 is prime then 36 is prime

    for(let i = 2; i < limit; i++){
        console.log(i)
        if(num%i==0){return false}
    }
    return true;
}