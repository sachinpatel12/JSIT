//given employee data you have to iteterate and find the avg salary of all degination

const employees = [
    { id: 1, name: "Sachin", designation: "SDE1", salary: 20000 },
    { id: 2, name: "Aman", designation: "SDE1", salary: 10000 },
    { id: 3, name: "Rahul", designation: "HR", salary: 30000 },
    { id: 4, name: "Vikas", designation: "SDE2", salary: 80000 },
    { id: 5, name: "Neha", designation: "SDE2", salary: 76000 }
];

findAvgSalary(employees);

function findAvgSalary(e){
 let hash = {};

 for(item of e){
    if(hash[item.designation] != undefined){
        hash[item.designation] = { total : hash[item.designation].total + item.salary, count : hash[item.designation].count + 1 };
    }else{
        hash[item.designation] = {total : item.salary, count: 1 }
    }
 }
 let result = [];
 for(let keys in hash){
    console.log(keys)
     let keyStr = keys;
    total =  hash[keys].total / hash[keys].count;
     
     result.push({ [keyStr] : total})
 }
//  console.log(hash)
  console.log(result)
}
