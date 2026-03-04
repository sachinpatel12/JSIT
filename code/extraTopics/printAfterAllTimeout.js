//print "hello - all done" once all timeout are done and 1 should print exact after 1 sec and two should after 2sec same n should print after n sec

function print(){
    console.log("hello - All timeout done")
}

function counter(n){
    return new Promise(( resolve, reject)=>{
        for(let i = 0; i < n; i++){
            if(n <= 0){resolve()}
        setTimeout(()=>{
            console.log(i)
             if(i == n-1){
            resolve();
        }
        }, 1000*i)

       
     }
    })
    
}

async function callMe(){
    await counter(4);
    print();
}
callMe()