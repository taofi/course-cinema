const requestURL = 'film.json';




let film, 
    hashA = window.location.hash.substring(1),
    nameF = document.getElementById('name'),
    nameF2 = document.getElementById('name2'),
    shortReview = document.getElementById('shortReview'),
    posterImg = document.getElementById('posterImg'),
    genre = document.getElementById('genre'),
    review = document.getElementById('review'),
    thrillerVid = document.getElementById('thrillerVid');

 
function openJson(){
    const xhr = new XMLHttpRequest
    xhr.open('GET', requestURL)
    xhr.responseType = 'json'

    console.log(hashA);
    xhr.onload = () => {
    film = xhr.response
   // console.log( film)
    let index;
    for( index in film){
       // console.log(film[index].id)
        if(hashA == film[index].id){
            console.log(hashA)
            break
        }
    }
    //console.log(film[index])
    nameF.textContent = film[index].name
    nameF2.textContent = film[index].name2
    shortReview.textContent = film[index].shortReview
    posterImg.src = film[index].posterImg
    genre.textContent = film[index].genre
    review.textContent = film[index].review
    thrillerVid.src = film[index].thrillerURL
    }

    xhr.onerror = () =>{
    console.error(xhr.response)
    }
    xhr.send()
}




openJson()
window.addEventListener('hashchange', openJson);