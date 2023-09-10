window.onscroll = function() {scrollFunction(),scrollFunction2()
   ,scrollFunction3() ,scrollFunction4 (),scrollFunction5 ()};


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


 
/////// section2 
  function scrollFunction2 (){
    let images=document.getElementsByClassName("photos")[0];
    let welcom=document.getElementsByClassName("text3")[0];
    let container1=document.getElementsByClassName('container1')[0];
  
   if(window.scrollY>=container1.offsetTop+100){

    images.classList.add('show');
    welcom.classList.add('show');
   }
 }

//  //////////////////////////////////

//////////  section3
function scrollFunction3 (){
  let img1=document.getElementsByClassName("room-1")[0];
  let img2=document.getElementsByClassName("room-2")[0];
  let img3=document.getElementsByClassName("room-3")[0];
  let img4=document.getElementsByClassName("room-4")[0];
  let img5=document.getElementsByClassName("room-5")[0];

  let welcom=document.getElementsByClassName("text3")[0];
  let container2=document.getElementsByClassName('container-2')[0];

 if(window.scrollY>=container2.offsetTop+270){

  img1.classList.add('show2');
  img2.classList.add('show2');
  img3.classList.add('show2');
  img4.classList.add('show2');
  img5.classList.add('show2');
  welcom.classList.add('show2');
 }
}


///////////////////// section 4
function scrollFunction4 (){
 
  let container4=document.getElementsByClassName('container-4')[0];
  let container3=document.getElementsByClassName('container-3')[0];

 if(window.scrollY>=container3.offsetTop+200){

  container4.classList.add('show2');
 }
}




//////      footer
function scrollFunction5 (){
 
  let col1=document.getElementsByClassName('col1')[0];
  let col2=document.getElementsByClassName('col2')[0];
  let col3=document.getElementsByClassName('col3')[0];
  let col4=document.getElementsByClassName('col4')[0];
  //let footer=document.getElementsByClassName('footer')[0];
 let container4=document.getElementsByClassName('container-4')[0];

 if(window.scrollY>=container4.offsetTop+700){

  col1.classList.add('show2');
  col2.classList.add('show2');
  col3.classList.add('show2');
  col4.classList.add('show2');
  //footer.classList.add('show2');

 }
}










