//promise practice


function addToCart() {
    return new Promise((resolve, reject) => {
        resolve("Hi i am sachin")
    });
}

const myPromise = new Promise((resolve, reject) => {
    resolve("Hi this is new promise")
})

//addToCart().then((data) => { console.log(data) });
//myPromise.then((d) => { console.log(d) })



//do a promise chaining
// A well-structured array of objects representing a basic e-commerce cart
const cartItemsMen = [
    {
        id: 1,
        name: "Running Shoes",
        price: 3000,       // Kept as a Number for mathematical calculations
        quantity: 1,       // Essential for cart operations
        category: "Footwear"
    },
    {
        id: 2,
        name: "Wireless Earbuds",
        price: 5000,
        quantity: 2,
        category: "Electronics"
    },
    {
        id: 3,
        name: "Cotton T-Shirt",
        price: 1200,
        quantity: 4,
        category: "Apparel"
    }
];


let blankItem = [];


function addToCart(cartItemsMen) {
    return new Promise((resolve, reject) => { resolve(cartItemsMen) });
}

function proceedToPayment(cartDetails) {
    return new Promise((resolve, reject) => {
        if (cartDetails.length) {
            let totalPrice = 0;
            for (items of cartDetails) {
                totalPrice = (items.price * items.quantity) + totalPrice;
            }
            resolve(totalPrice)
        } else {
            reject('No cart Item found')
        }
    })


}

function paymentAndOrderStatus(priceDetails) {
    return new Promise((resolve, reject) => {
        if (priceDetails > 0) {
            resolve("Order Placed and Shipped")
        } else {
            reject("Order Failed")
        }
    })

}


//clasical promise hell example below here then -> then create  a hell in this my ecommerse 

/*
function myEcommerce(items) {
    addToCart(items).then((addedToCartData) => {
        console.log(addedToCartData);

        proceedToPayment(addedToCartData).then((paymentValue) => {
            console.log(paymentValue);
            paymentAndOrderStatus(paymentValue).then((status) => { console.log(status) })

        })
    }).catch((err)=>{console.log(err)})
}

// myEcommerce(cartItemsMen);
myEcommerce(blankItem);

*/

//now moving to promise chaining and solve the problem of promise hell

function myEcommerce_chaining(items) {
    addToCart(items).then((addedToCartData) => {
        console.log(addedToCartData);

        return proceedToPayment(addedToCartData) //this is not a data it is while promise it is just like you do this let fn = any function which returns a promise.

    }).then((paymentValue) => {
        console.log(paymentValue);
        return paymentAndOrderStatus(paymentValue); //if we dont return it will return undefined to next then which is expecting promise.
    }).then((orderStatus) => { console.log(orderStatus) }).catch((err) => { console.log("ERR: ",err) })
}

// myEcommerce(cartItemsMen);
myEcommerce_chaining(blankItem);