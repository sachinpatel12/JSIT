function closureWithouLet(){
 for(var i = 1; i <= 5; i++){
    //IIFE
    (function (x){
     setTimeout(()=>{console.log(x)},1000);
    })(i);
    

 }
}

closureWithouLet();