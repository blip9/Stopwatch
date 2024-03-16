let running=false;
const timer = document.getElementById("timer");
let startTime =0;
let elapsedTime = 0;
function start(){
    if(!running){
        running = true;
        startTime =  Date.now() - elapsedTime;
        timeid=setInterval(update,100);
        
    }

}
function pause(){
    running = false;
    clearInterval(timeid);
}
function reset(){
    clearInterval(timeid);
    running = false;
    startTime =0;
    elapsedTime = 0;
    timer.textContent ="00:00:00:00";

}
function update(){
    let currTime = Date.now();

    elapsedTime = currTime-startTime;
    console.log(elapsedTime);
    let hour = Math.floor(elapsedTime/(1000*60*60));
    let min = Math.floor(elapsedTime/(1000*60)%60);
    let second = Math.floor(elapsedTime/1000%60);
    let millsec = Math.floor(elapsedTime%1000/10);
    hour = String(hour).padStart(2,0);
    min = String(min).padStart(2,0);
    second = String(second).padStart(2,0);
    millsec = String(millsec).padStart(2,0);
    let time = `${hour}:${min}:${second}:${millsec}`;
    
    timer.textContent = time;
}