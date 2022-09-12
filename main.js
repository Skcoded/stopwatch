var minutes = 00;
var seconds = 00;
var tens = 00;
var getMinutes = document.querySelector('.minutes')
var getSeconds = document.querySelector('.seconds');
var getTens = document.querySelector('.tens');
var btnStart = document.querySelector('.btn-start');
var btnStop = document.querySelector('.btn-stop');
var btnReset = document.querySelector('.btn-reset');
var interval;
btnStart.addEventListener('click',()=>{
    interval = setInterval(startTimer, 10)
})
btnStop.addEventListener('click',()=>{
    clearInterval(interval);
}) 
btnReset.addEventListener('click', ()=>{
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    minutes = '00';
    getMinutes.innerHTML = minutes;
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
})

function startTimer(){
    tens++;
    if(tens <= 9){
        getTens.innerHTML ='0' + tens;
    }
    if (tens > 9){
        getTens.innerHTML = tens;
    }
    if(tens > 59){
    seconds++;
    getSeconds.innerHTML = '0' + seconds;
    tens = 0;
    getTens.innerHTML = '0' + 0; 
    }
    if(seconds <= 9){
        getSeconds.innerHTML = '0' + seconds;
    }
    if(seconds > 9){
        getSeconds.innerHTML = seconds;
    }
    if(seconds > 59){
        minutes++;
        getMinutes.innerHTML = '0' + minutes;
        tens = 0;
        seconds = 0;
        getTens.innerHTML = '0' + 0;
        getSeconds.innerHTML = '0' + 0; 
    }
    if(minutes > 9){
        getMinutes.innerHTML = minutes;
    }
    
}

