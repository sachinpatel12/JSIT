// Question

const res = require("express/lib/response");

// Return ONLY active users whose age is greater than or equal to 18.

// Expected Output:

// [
//   { id: 1, name: "Sachin" },
//   { id: 3, name: "Rahul" }
// ]


const users = [
  { id: 1, name: "Sachin", active: true, age: 24 },
  { id: 2, name: "Aman", active: false, age: 17 },
  { id: 3, name: "Rahul", active: true, age: 30 },
  { id: 4, name: "Neha", active: false, age: 15 }
];

getActiveUser(users);

function getActiveUser(users){
    let result = [];
    for(key of users){
        if(key.active == true && key.age > 18){
            result.push({id: key.id , name: key.name})
        }
    }
    console.log(result);
}