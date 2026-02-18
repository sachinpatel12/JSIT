let arr : (string | number) [] = [];

type both = string | number;

let arr2 : both[]=[1,2,3,"sachin"]
let readArr : readonly string[] = ["sachin", "patel"];
//  readArr.push("guppu")

let arrObj : {name:string, age:number}[] = [{name:"sachin", age:25}]

let tupleprac : [string, number, boolean] = ["sachin", 25, false];

tupleprac.push("data")//big issueueeeuu

let obj : {name:string, id:number, [key:string]: string|number|boolean} =  {name:"sachin", id:25555, age:25, gender:'male'};

obj['isactive']=true;

let data : string | number = "sacin";

data.toUpperCase();//you have to do type narrowing 