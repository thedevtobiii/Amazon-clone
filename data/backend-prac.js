// to send an HTTP message/request
const xhr = new XMLHttpRequest();
//to wait for a response
xhr.addEventListener('load', ()=>{
 console.log(xhr.response);
});

xhr.open('GET','https://supersimplebackend.dev'); 
xhr.send();  //asynchronous code
