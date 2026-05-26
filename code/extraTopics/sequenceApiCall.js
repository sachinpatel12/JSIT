const urls = [
    "https://api1.com",
    "https://api2.com",
    "https://api3.com"
];

async function sequesnceApiCall() {
    if (urls.length == 0) { return 'No data' }
    let result = [];
    try {
        for (let i = 0; i < urls.length; i++) {
            let res = await fetch(urls[i]);

            if(res.status == 200){
                let data = await res.json();
                result.push(data)
            } else{
                // push to retry logic Array
            }
        }
    } catch (err) {
        console.log(err);
        //push to retry logic 
    }

}

async function retryLogic(url, retryCount){
 for(let i = 1; i <= retryCount; i++){
    try{
    let data = await fetch(url);
    if(data.status == 200){
        let response = await data.json();
        return response;
        
    }else{
        
        throw new Error ('retry logic ')
    }
    
    }catch(err){
        if(i == retryCount){
       throw new Error ('retry logic ')
        }
        console.log("this is retry ")
    }
    
 }
}