let hashA = window.location.hash;
console.log(hashA);

let nowB = document.getElementById('now');
let soonB = document.getElementById('soon');
checkHash();
window.addEventListener('hashchange', checkHash);
nowB.addEventListener('click',function(){
    hashA = window.location.hash;
    if(hashA != '#now')
    location.hash = "now";
})
soonB.addEventListener('click',function(){
    hashA = window.location.hash;
    if(hashA != '#soon')
    location.hash = "soon";
})
function checkHash(){
    hashA = window.location.hash;
    if(hashA != '#now' && hashA != '#soon')
    {
        location.hash = "now";
        hashA ='#now';
    }
    if(hashA == '#now'){
        nowB.classList.add('active');
        soonB.classList.remove('active');
    }
    if(hashA == '#soon'){
        nowB.classList.remove('active');
        soonB.classList.add('active');
    }
}
