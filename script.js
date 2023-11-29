let timer = null;
let hrs = document.getElementById('hours');
let secs = document.getElementById('seconds');
let mins = document.getElementById('minutes');
let dotH = document.querySelector('.h_dot');
  let dotM = document.querySelector('.m_dot');
  let dotS = document.querySelector('.s_dot');
let hh = document.getElementById('hrs');
  let mm = document.getElementById('min');
  let ss = document.getElementById('ss');

let hours ="0";
let minutes = "0";
let seconds = "0";
hrs.innerHTML = "00";
mins.innerHTML = "00";
secs.innerHTML = "00";
function stopwatch(){
    seconds ++;
    if(seconds == 60){
        seconds = 0;
        minutes ++;
        if(minutes == 60){
            minutes = 0;
            hours ++;
        };
    }
    let h = hours < 10? "0" + hours : hours;
let s = seconds < 10? "0" + seconds : seconds;
let m = minutes < 10? "0" + minutes :minutes;
hrs.innerHTML = h;
mins.innerHTML = m;
secs.innerHTML = s;

let dotH = document.querySelector('.h_dot');
  let dotM = document.querySelector('.m_dot');
  let dotS = document.querySelector('.s_dot');



let hh = document.getElementById('hrs');
  let mm = document.getElementById('min');
  let ss = document.getElementById('ss');


hh.style.strokeDashoffset = 440 - (440 * h) / 12;
  mm.style.strokeDashoffset = 440 - (440 * m) / 60;
  ss.style.strokeDashoffset = 440 - (440 * s) / 60;

  // set dot time position indicator
  dotH.style.transform = `rotate(${h * 30}deg)`;
  dotM.style.transform = `rotate(${m * 6}deg)`;
  dotS.style.transform = `rotate(${s * 6}deg)`;
}
function startCount(){
    if(timer != null){
        clearInterval(timer);
    }
   timer = setInterval(stopwatch, 1000);
}
function stopCount(){
    clearInterval(timer);
}
function resetCount(){
    clearInterval(timer);
    hrs.innerHTML = "00";
    mins.innerHTML = "00";
    secs.innerHTML = "00";
     hours ="0";
minutes = "0";
 seconds = "0";
 hh.style.strokeDashoffset = 0;
 mm.style.strokeDashoffset = 0;
 ss.style.strokeDashoffset = 0;

 // set dot time position indicator
//  dotH.style.transform = `rotate(${h * 0}deg)`;
//  dotM.style.transform = `rotate(${m * 0}deg)`;
//  dotS.style.transform = 0;

 getComputedStyle(dotS).getPropertyValue('transform'); 
dotS.style.transform = 'none';
dotS.getBoundingClientRect();
getComputedStyle(dotM).getPropertyValue('transform'); 
dotM.style.transform = 'none';
dotM.getBoundingClientRect();
getComputedStyle(dotH).getPropertyValue('transform'); 
dotH.style.transform = 'none';
dotH.getBoundingClientRect();

}