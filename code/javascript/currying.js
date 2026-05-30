// At first, I thought currying was just about writing functions like:

// sum(1)(2)(3)

// But after practicing, I understood the real idea behind it.

// Currying is a technique where we break a function into multiple functions so arguments can be passed step by step.

// Or simply:

// Taking a function that accepts multiple arguments and converting it into multiple functions that take one argument at a time.

// I tried understanding it with a real-world e-commerce example 👇

// Normally, if tax and discount values are fixed for all products, we still end up passing the same arguments again and again:

//we have pre calculated tax value which is 18% on all orders
//and as this is sale so we are giving 50% discount on all products
//so why calculate the price like this every time?

function calculatePriceOld(tax, discount, price){
    let dsc = price * 0.50;
    return (price * 0.18) + dsc
}

// console.log(calculatePriceOld(18, 50, 100));

//So instead of repeating the same values, we can use currying 👇

function calculateTax(tax){
    return function calculateDiscount(disc){
        return function realPrice(price){
            return (price * 0.18) + price * 0.50
        }
    }
}

// now the main thing is here

let calculateDiscountAfetrTax = calculateTax(18);
console.log(calculateDiscountAfetrTax)

let calculatePriceLast = calculateDiscountAfetrTax(50);
console.log(calculatePriceLast)

// console.log(calculatePriceLast(100));
// console.log(calculatePriceLast(200));
// console.log(calculatePriceLast(500));
// console.log(calculatePriceLast(1000));
// console.log(calculatePriceLast(10000));

//The most interesting part for me was this 👇

let calculateDiscountAfetrTax = calculateTax(18);

// At this point, JavaScript already remembers the tax value internally using closures.

// Then later:

// calculateDiscountAfetrTax(50)

// Now discount is also remembered.

//And finally:

calculatePriceLast(100)

// Only the changing value (price) is passed.

// This makes the code:

// More reusable
// Cleaner
// Easier to maintain

// Small concepts like currying really show how powerful JavaScript functions are