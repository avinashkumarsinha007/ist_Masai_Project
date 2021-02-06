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
    
var slideIndex = 1;
showSlides(slideIndex);

function prev(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("shell");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

var slideIndex1 = 1;
showSlides1(slideIndex1);



function currentSlide1(n) {
  showSlides1(slideIndex1 = n);
}


function showSlides1(n) {
    var i;
    var slides = document.getElementsByClassName("show11");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex1 = 1}    
    if (n < 1) {slideIndex1 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex1-1].style.display = "block";  
    dots[slideIndex1-1].className += " active";
  }

//   function showSlides(n) {
//     var i;
//     var j;
//     var slides1 = document.getElementsByClassName("cont31");
//     var slides = document.getElementsByClassName("show11");
//     var dots = document.getElementsByClassName("dot");
//     if (n > slides1.length) {slide1Index = 1}    
//     if (n < 1) {slide1Index = slides1.length}
//     if (n > slides.length) {slideIndex = 1}    
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides1.length; i++) {
//         slides1[i].style.display = "none";}
//         for (j=0;j<slides.length;j++){
//             slides[j].style.display = "none"; 
//         }
    
//     for (j = 0; j < dots.length; j++) {
//         dots[j].className = dots[j].className.replace(" active", "");
//     }
//     slides1[slide1Index-1].style.display = "block";  
//     slides[slideIndex-1].style.display = "block";  
//     dots[slideIndex-1].className += " active";
//   }
  
  

var myIndex = 0;
show();
setInterval(show, 4000); 
function show() {
  var i;
  var x = document.getElementsByClassName("shell");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  
}



var ab = 0;
show1();
setInterval(show1, 2000); 
function show1() {
  var i;
  var x = document.getElementsByClassName("purple_circle2");
  var y = document.getElementsByClassName("item1")
  for (i = 0; i < x.length; i++) {
    x[i].style.background = "rgb(255, 255, 255)";
   
    y[i].style.color = "rgb(95, 95, 146)"; 
  }
  ab++;
  if (ab > x.length) {ab = 1}    
  x[ab-1].style.background = "linear-gradient(90deg,#c44ae4,#df67ff)";  
  y[ab-1].style.color = " rgb(243, 104, 243)" ;
  
}


