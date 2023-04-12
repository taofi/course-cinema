let stars = document.getElementsByClassName('star');
console.log(stars);
for(let i = 1;i<=stars.length;i++){

    stars[i - 1].onmouseover = function(){
        this.setAttribute("fill", "white");
        console.log(this.setAttribute)
    }
    stars[i - 1].onmouseout = function(){
        this.setAttribute("fill", "");
        console.log(this.setAttribute)
    }
}