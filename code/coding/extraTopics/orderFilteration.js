// Question

// Return:

// [
//   {
//     customer: "Sachin",
//     totalAmount: 52000
//   },
//   {
//     customer: "Aman",
//     totalAmount: 22000
//   }
// ]

const orders = [
    {
        orderId: 1,
        customer: "Sachin",
        items: [
            { product: "Laptop", price: 50000, quantity: 1 },
            { product: "Mouse", price: 1000, quantity: 2 }
        ]
    },
    {
        orderId: 2,
        customer: "Aman",
        items: [
            { product: "Keyboard", price: 2000, quantity: 1 },
            { product: "Monitor", price: 10000, quantity: 2 }
        ]
    }
];


totalAmount(orders);


function totalAmount(orders) {
    let orderSummary = [];
    for (const key of orders) {
        let totalAmount = 0;
        if (key.items.length) {
            for (const items of key.items) {
                totalAmount = totalAmount + (items.price * items.quantity);
            }
        }
        orderSummary.push({
            name: key.customer,
            totalAmount: totalAmount
        }
        )
    }

    console.log(orderSummary)
}