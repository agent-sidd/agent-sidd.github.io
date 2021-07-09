var navtoogle= document.getElementsByClassName("toggle");
var mob_nav = document.getElementsByClassName("mobile-menu");
var main_body = document.getElementsByClassName("site-content-wrap");
var menu = document.getElementsByClassName("humbrgr");
navtoogle[0].addEventListener('click',function(){
    console.log("clicked")
mob_nav[0].classList.toggle('show-nav');
main_body[0].classList.toggle('blur');
if(menu[0].classList.contains('bx-menu-alt-right')){
    menu[0].classList.remove('bx-menu-alt-right');
    menu[0].classList.add('bx-x')
}
else if(menu[0].classList.contains('bx-x')){
    
    menu[0].classList.remove('bx-x')
    menu[0].classList.add('bx-menu-alt-right');
}
})

 function loading(){
    setTimeout(function(){ 
    var loader=document.getElementsByClassName('loader-content')
         loader[0].style.display="none";
          }, 5000);
 }