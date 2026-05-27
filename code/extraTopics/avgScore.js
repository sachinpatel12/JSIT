// Question

const { count } = require("sails-mysql");

// Find:

// Average score per category

// Expected Output:

// {
//    Frontend: 76.66,
//    Backend: 85,
//    DevOps: 90
// }


const students = [
  {
    name: "Sachin",
    courses: [
      { category: "Frontend", score: 80 },
      { category: "Backend", score: 70 }
    ]
  },
  {
    name: "Aman",
    courses: [
      { category: "Frontend", score: 60 },
      { category: "DevOps", score: 90 }
    ]
  },
  {
    name: "Rahul",
    courses: [
      { category: "Backend", score: 100 },
      { category: "Frontend", score: 90 }
    ]
  }
];

findAvgScore(students);

function findAvgScore(students){
    let category = {};
    for(const items of students){
        for(const courses of items.courses){
            if(category[courses.category] != undefined){
                category[courses.category] = {total : category[courses.category].total + courses.score, count : category[courses.category].count + 1}
            }else{
                category[courses.category] = {total : courses.score, count : 1}
            }
        }
    }
    let result = [];
    for(const keys of Object.keys(category)){
        result.push({[keys] :parseFloat(Number(category[keys].total / category[keys].count).toFixed(2)) }) //parse float remove extra 00 after toFixed but use outer sode only
    }

    console.group(result);
}