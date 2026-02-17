var a = 10;
let b = 15;
var a = 17; //working
// let b = 90; //error
// let a = 90; //error
var fn = () => {
    var a = 11;
    let b = 68;
    console.log(a) //11
    console.log(b) //68
}
fn()
console.log(b) //15
console.log(a) //17