window.onscroll = function() {scrollFunction(),scrollFunction_4(),scrollFunction_3()};


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


//////////  section3  ////  fadding photos and text
function scrollFunction_3 (){
    let img1=document.getElementsByClassName("room-1")[0];
    let img2=document.getElementsByClassName("room-2")[0];
    let img3=document.getElementsByClassName("room-3")[0];
    let img4=document.getElementsByClassName("room-4")[0];
    let img5=document.getElementsByClassName("room-5")[0];
  
    let welcom=document.getElementsByClassName("text3")[0];
    let container_9=document.getElementsByClassName('container-9')[0];
  
   if(window.scrollY>=container_9.offsetTop+1400){
  
    img1.classList.add('show2');
    img2.classList.add('show2');
    img3.classList.add('show2');
    img4.classList.add('show2');
    img5.classList.add('show2');
    welcom.classList.add('show2');
   }
  }



// ///////////footer

function scrollFunction_4 (){
 
    let col1=document.getElementsByClassName('col1')[0];
    let col2=document.getElementsByClassName('col2')[0];
    let col3=document.getElementsByClassName('col3')[0];
    let col4=document.getElementsByClassName('col4')[0];
    let footer=document.getElementsByClassName('footer')[0];
   let container_3=document.getElementsByClassName('container-3')[0];
  
   if(window.scrollY>=container_3.offsetTop+700){
  
    col1.classList.add('show2');
    col2.classList.add('show2');
    col3.classList.add('show2');
    col4.classList.add('show2');
    footer.classList.add('show2');
  
   }
  }

