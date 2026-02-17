function parent(){
    let a = 10;
    function child(){
        console.log(a)
    }
   return child;
}
let ch = parent();

ch();