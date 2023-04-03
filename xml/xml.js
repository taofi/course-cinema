const xhr = new XMLHttpRequest();
const requestURL = "clients.xml";

xhr.open('GET', requestURL);
xhr.send();

xhr.addEventListener("load", function(){
    console.log(xhr.responseXML);
})