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



//  /////////////////////////  validate inputs
document.getElementById("send").onclick=validate;
document.getElementById("reset").onclick=deletee ;

var flag_n,flag_s,flag_e,flag_p,flag_m=false;


function deletee(){
  document.getElementById('name').value='';
  document.getElementById('email').value='';
  document.getElementById('subject').value='';
  document.getElementById('number').value='';
  document.getElementById('message').value='';
  


}

function validate(){
  validate_name();
  validate_email();
  validate_subject();
  validate_number();
  validate_msg();
 all_correct();
}



//validate user_name

function validate_name(){
   
  var user_name=document.getElementById("name").value;
  
  if (user_name.length==0){
   alert('please fill the name');
   flag_n= false;
  //  return flag_n;

  }else if(user_name.length<3){
    alert('please enter a valid name');
   
   flag_n= false;
 
  }else if(containsNumber(user_name)){
    alert('sorry numbers is not supported');
     
     flag_n= false;
   
  }else{
     
     flag_n= true;
     

   
  }
}


//validate user_email
function validate_email(){
   
  var user_email=document.getElementById("email").value;
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
 
  if (user_email.length==0){

   alert('please fill the email');
   flag_e= false;
 

  }else if(user_email.match(validRegex)){
    
   flag_e= true;


  }else{

    alert('enter a valid email');
   flag_e= false;
  
  }
}

/// validate subject


function validate_subject(){
   
  var subject_name=document.getElementById("subject").value;
  
  if (subject_name.length==0){
   alert('please fill the subject');
   flag_s= false;
  //  return flag_n;

  }else if(subject_name.length<4){
    alert('please enter a valid subject');
   
   flag_s= false;
 
  }else{
     
     flag_s= true;
     

   
  }
}

//validate user_number

function validate_number(){
   
  var user_number=document.getElementById("number").value;
  
  if (user_number.length==0){
   alert('please fill the number');
   flag_p= false;
  //  return flag_n;

  }else if(user_number.length<11){
    alert('please enter a valid number');
   
   flag_p= false;
 
  }else if(user_number.match(/[a-zA-Z]/)){
    alert('sorry letters is not supported');
     flag_p= false;
   
  }else{
     
     flag_p= true;
     

   
  }
}


//validate user_number

function validate_msg(){
   
  var msg=document.getElementById("message").value;
  
  if (msg.length==0){

   alert('please fill the message');
   flag_m= false;
  //  return flag_n;

  }else{
     
     flag_m= true;
     

   
  }
}

///fuction to check that all the inputs are valid
function all_correct(){
  if(flag_n && flag_e &&flag_s && flag_p && flag_m  ){

    deletee();

  }
}





// ///////   footer

function scrollFunction_footer (){
 
  let col1=document.getElementsByClassName('col1')[0];
  let col2=document.getElementsByClassName('col2')[0];
  let col3=document.getElementsByClassName('col3')[0];
  let col4=document.getElementsByClassName('col4')[0];
  let footer=document.getElementsByClassName('footer')[0];
 let container4=document.getElementsByClassName('container_12')[0];

 if(window.scrollY>=container4.offsetTop+750){

  col1.classList.add('show2');
  col2.classList.add('show2');
  col3.classList.add('show2');
  col4.classList.add('show2');
  footer.classList.add('show2');

 }
}
