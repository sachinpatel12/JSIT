

let cart = ["shoes", "shocks"];
let blankCart = [];

// const pr =
//     processToPaymentPR(cart)
//     .then(orderid =>{
//        return paymentSuccess(orderid); //very important line 
//     }).then(paymentInfo=>{
//         console.log(paymentInfo)
//     })




function processToPaymentPR(cart) {
    return new Promise((resolve, reject) => {
        if (cart.length > 0) {
            resolve(139909874)
        } else {
            let err = new Error("cart is blank")
            reject(err)
        }
    })
}

function paymentSuccess(orderId) {
    return new Promise((resolve, reject) => {
        if (orderId) {
            resolve("payment done")
        } else {
            let err = new Error('payment failed')
            reject(err);
        }
    })
}


//async await
let orderShipped = async (cart) => {
    try {
        let orderID = await processToPaymentPR(cart);
        let paymentstatus= await paymentSuccess(orderID);
        console.log(paymentstatus);
    } catch (err) {
        console.log(err);
    }

}

orderShipped(cart);