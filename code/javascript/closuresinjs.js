function getPrice(tax,discount,price){
    return ((price * tax) + (price * discount))
}


// with closures

function calculateTax(tax){
    return function calculateDiscount(discount){
        return function calculatePrice(price){
            return (price * tax ) + (price * discount)
        }
    }
}

const tax = calculateTax(0.18);
const discount = tax(0.50);
//console.log("the price is : ", discount(100))



function multiplyGeneric(multiplyer){
    return function multiplyWith(number)
    {
        return multiplyer * number;
    }
}

const multiplyWith5 = multiplyGeneric(5);

console.log(multiplyWith5(2))
console.log(multiplyWith5(5))

const multiplyWith6 = multiplyGeneric(6);
console.log(multiplyWith6(2))