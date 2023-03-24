let currentPos = 0;
let convAfish = document.getElementById('conveyorAfish');
let widthA;
let widthCont;
let maxPos;
let arrRA = document.getElementById('arrRA');
let arrLA = document.getElementById('arrLA');
let posters = document.querySelectorAll('.poster');
let posterW = posters[0].offsetWidth + 40;
let shag = posterW;
let countP = posters.length;

let visiblePoster;

arrLA.addEventListener('click', function(){
    currentPos += shag;
    currentPos = Math.min(0, currentPos);
    move();
});
arrRA.addEventListener('click', function(){
    widthCont = document.getElementById('afishaContent').offsetWidth;
    visiblePoster = widthCont / posterW;
    let tmp = posterW*(Math.trunc(visiblePoster) - visiblePoster);
    maxPos = (countP - Math.trunc(visiblePoster)) * (posterW) + tmp; 
    currentPos -= shag;
    currentPos = Math.max(currentPos, -(maxPos + 50))
    move();
});

function move(){
    convAfish.style.transform = `translatex(${currentPos}px)`;
}