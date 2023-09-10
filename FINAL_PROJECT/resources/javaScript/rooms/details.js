window.onscroll = function() {scrollFunction(),scrollFunction_footer ()};


// //// first  navbar 
function scrollFunction() {
 if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 40) {
   document.getElementById("myTopnav").style.top = "0";
 } else if (document.body.scrollTop < 30 || document.documentElement.scrollTop < 40){
   document.getElementById("myTopnav").style.top = "-50px";
 }
}

// /////// second  navbar 
document.getElementsByClassName('icon').onclick=myFunction1;
function myFunction1() {
   var x = document.getElementById("myTopnav");
   if (x.className === "topnav") {
     x.className += " responsive";
   } else {
     x.className = "topnav";
   }
 }

 // //////make the nav responsive
document.getElementsByClassName('icon2').onclick=myFunction2;
function myFunction2() {
   var x = document.getElementById("secondNavbar");
   if (x.className === "second_nav") {
     x.className += " responsive";
   } else {
     x.className = "second_nav";
   }
 }



 
// ///////   footer

function scrollFunction_footer (){
 
    let col1=document.getElementsByClassName('col1')[0];
    let col2=document.getElementsByClassName('col2')[0];
    let col3=document.getElementsByClassName('col3')[0];
    let col4=document.getElementsByClassName('col4')[0];
    let footer=document.getElementsByClassName('footer')[0];
   let container4=document.getElementsByClassName('form')[0];
  
   if(window.scrollY>=container4.offsetTop+200){
  
    col1.classList.add('show2');
    col2.classList.add('show2');
    col3.classList.add('show2');
    col4.classList.add('show2');
    footer.classList.add('show2');
  
   }
  }