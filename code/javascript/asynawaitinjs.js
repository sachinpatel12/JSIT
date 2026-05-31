
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


async function myEcommerce_asyncAwait(items) {

    try {
        let addedToCartData =  await addToCart(items);
        let paymentValue = await proceedToPayment(addedToCartData);
        let orderStatus = await paymentAndOrderStatus(paymentValue)
        console.log(orderStatus);
    } catch (err) { console.log("ERR: ", err); }
}

 myEcommerce_asyncAwait(cartItemsMen);
// myEcommerce_asyncAwait(blankItem);