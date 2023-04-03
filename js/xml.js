const xhr = new XMLHttpRequest();
const requestURL = "https://raw.githubusercontent.com/taofi/course-cinema/master/xml/xml.js";

xhr.open('GET', requestURL, false);
xhr.send();

let xmlData = xhr.responseXML;
console.log(xmlData);
let customers = xmlData.getElementsByTagName("customer")[0].getElementsByTagName("hash")[0].childNodes[0];
console.log(customers);
customers.textContent = "green";
var xmlString = new XMLSerializer().serializeToString(xmlData);
/*if(!xmlData){
    xmlData = (new DOMParser()).parseFromString(xhr.responseText, "text/xml");
    
    let customers = xmlData.getElementsByTagName("customer");
    console.log(customers);
}*/
