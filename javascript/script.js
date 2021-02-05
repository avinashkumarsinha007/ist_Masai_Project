var head = document.querySelector('#head')
var a= window.innerHeight;
var b = document.documentElement.scrollHeight;

if (b>(2*a)){
    head.style.position= "fixed";
    head.style.top = "0%";
    head.style.height = "73px";   
    head.style.justifyContent = "flexEnd";
    head.style.background = "white";
    console.log("hello")
}else{
    head.style.position ="relative"
}

