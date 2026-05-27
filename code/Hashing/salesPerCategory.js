// Total sales per category

// Expected Output:

// {
//    Electronics: 5000,
//    Clothing: 4000,
//    Groceries: 1000
// }

const orders = [
  { orderId: 1, customer: "Sachin", category: "Electronics", amount: 2000 },
  { orderId: 2, customer: "Aman", category: "Clothing", amount: 1500 },
  { orderId: 3, customer: "Sachin", category: "Electronics", amount: 3000 },
  { orderId: 4, customer: "Rahul", category: "Groceries", amount: 1000 },
  { orderId: 5, customer: "Aman", category: "Clothing", amount: 2500 }
];

totalSales(orders);

function totalSales(orders){
    let obj = {};

    for(items of orders){
        if(obj[items.category] != undefined){
            obj[items.category] = obj[items.category] + items.amount;
        }else{
            obj[items.category] = items.amount;
        }
    }
    console.log(obj)
}