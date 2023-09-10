window.onscroll = function() {scrollFunction(),scrollFunction3(),scrollFunction2() ,scrollFunction4 ()};


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

 
///// section2
function scrollFunction3(){
    
  let  container_6=document.getElementsByClassName(" container-6")[0];
  let container2=document.getElementsByClassName('section-1')[0];
    
     if(window.scrollY>=container2.offsetTop+200){
  
      container_6.classList.add('show');
     }
   }
  
  
///// section3
function scrollFunction2 (){
    let images=document.getElementsByClassName("photos")[0];
    let welcom=document.getElementsByClassName("text3")[0];
    let container1=document.getElementsByClassName('container-6')[0];
  
   if(window.scrollY>=container1.offsetTop+100){

    images.classList.add('show');
    welcom.classList.add('show');
   }
 }




// ///////   footer

function scrollFunction4 (){
 
    let col1=document.getElementsByClassName('col1')[0];
    let col2=document.getElementsByClassName('col2')[0];
    let col3=document.getElementsByClassName('col3')[0];
    let col4=document.getElementsByClassName('col4')[0];
    let footer=document.getElementsByClassName('footer')[0];
   let container4=document.getElementsByClassName('container-8')[0];
  
   if(window.scrollY>=container4.offsetTop+700){
  
    col1.classList.add('show2');
    col2.classList.add('show2');
    col3.classList.add('show2');
    col4.classList.add('show2');
    footer.classList.add('show2');
  
   }
  }


