let slides = document.getElementsByClassName('slider_pst'); 

let visSlide = 0;
let slidCount = slides.length;

let arrR = document.getElementById('arrPR');
let arrL = document.getElementById('arrPL');
console.log(slidCount);
for(let i = 0; i < slidCount; i ++){
    slides[i].style.opacity = '0';
}
slides[visSlide].style.opacity = '1';

let last;
const timerDelay = 10000;
let timerSwipe = setInterval(RSwipe, timerDelay);

arrL.addEventListener('click', LSwipe);
function LSwipe(){
    clearTimeout(timerSwipe);
    last = visSlide;
    visSlide --;
    if(visSlide < 0)
        visSlide = slidCount -1;
    chenge();
    timerSwipe = setInterval(LSwipe, timerDelay);
}
arrR.addEventListener('click', RSwipe);
function RSwipe(){
    clearTimeout(timerSwipe);
    last = visSlide;
   visSlide ++;
   if(visSlide >= slidCount)
        visSlide = 0;
    chenge();
    timerSwipe = setInterval(RSwipe, timerDelay);
}



function chenge(){
    slides[last].style.opacity ='0';
    slides[visSlide].style.opacity = '1';
}