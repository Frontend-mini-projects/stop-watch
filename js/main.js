{/* <div class="number">
            <span id="hour">00</span>:
            <span id="mint">00</span>:
            <span id="sec">00</span>:
            <span id="msec">00</span>
        </div> */}



var militimer;
var timer;
function startmilisecond(){
    
    var milisecond = parseInt(document.getElementById("msec").innerText);

    milisecond = milisecond+1;
    milisecond = (milisecond<10) ? ("0"+milisecond) : (milisecond);

    if(milisecond == 60){
        milisecond = milisecond%60;
    }

    
    document.getElementById("msec").innerText = milisecond;
    militimer = setTimeout(startmilisecond,10);
}

function starttimer(){

    var  hour = parseInt(document.getElementById("hour").innerText);
    var  minute = parseInt(document.getElementById("mint").innerText);
    var  second = parseInt(document.getElementById("sec").innerText);

    second = second+1;

    if(second == 60){
        minute = minute+1;
        second = second-60;

        if(minute == 60){
            hour = hour+1;
            minute = minute-60;
        }
    }
    

    second = (second<10) ? ("0"+second) : (second);
    minute = (minute<10) ? ("0"+minute) : (minute);
    hour = (hour<10) ? ("0"+hour) : (hour);

    document.getElementById("hour").innerText = hour;
    document.getElementById("mint").innerText = minute;
    document.getElementById("sec").innerText = second;



    timer = setTimeout(starttimer,1000);

    document.getElementById("reset").style.display = "none";
    document.getElementById("resume").style.display = "none";

    document.getElementById("stop").style.display = "inline-block";
    document.getElementById("lapbtn").style.display = "inline-block";
    document.getElementById("start").style.display = "none";


}

function stoptimer(){
    clearTimeout(timer);
    clearTimeout(militimer);

    document.getElementById("reset").style.display = "inline-block";
    document.getElementById("resume").style.display = "inline-block";

    document.getElementById("stop").style.display = "none";
    document.getElementById("lapbtn").style.display = "none";
    document.getElementById("start").style.display = "none";




}

function resettimer(){
    clearTimeout(timer);
    clearTimeout(militimer);
    document.getElementById("hour").innerText = "00";
    document.getElementById("mint").innerText = "00";
    document.getElementById("sec").innerText = "00";
    document.getElementById("msec").innerText = "00";


    const parentlap = document.getElementById("lap");
    while(parentlap.firstChild){
        parentlap.removeChild(parentlap.firstChild);
    }


    
    document.getElementById("reset").style.display = "none";
    document.getElementById("resume").style.display = "none";

    document.getElementById("stop").style.display = "none";
    document.getElementById("lapbtn").style.display = "none";
    document.getElementById("start").style.display = "inline-block";


}

function createlap() {




    const list = document.createElement("li");
    let current_time = document.getElementById("number").innerText;
    const node = document.createTextNode(current_time);
    list.appendChild(node);

    const element = document.getElementById("lap");
    const child = document.getElementById("p1");
    list.setAttribute("class","border");
    element.insertBefore(list, child);


}


function resume(){

    document.getElementById("reset").style.display = "none";
    document.getElementById("resume").style.display = "none";

    document.getElementById("stop").style.display = "inline-block";
    document.getElementById("lapbtn").style.display = "inline-block";
    document.getElementById("start").style.display = "none";


}