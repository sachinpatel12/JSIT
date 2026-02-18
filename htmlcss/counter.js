let count = 10;
let color = "red";

let elem = document.getElementById('showNum');
elem.textContent = count;
elem.style.color = color;
let timer = setInterval(()=>{
    console.log(count--)
    elem.textContent = count;
    if(count == 0){
        color = 'blue';
        elem.style.color = color;
        clearInterval(timer);
    }

},1000)