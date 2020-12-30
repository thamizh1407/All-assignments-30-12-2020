var user=document.getElementById('username');
var pass=document.getElementById("password");
var submit=document.getElementById('login-btn');
var count=0;
// window.location.href="E:\02-Unique-Hire\assingment-3.1\success login.html";
form.addEventListener("keyup", fun=>{
   // fun.preventDefault();
     count=0;
    validateUser();
    validatePass();
    console.log("after executed"+count);
});
form.addEventListener(("submit"),funct=>{
   // alert("if condition"+count);
    if(count === 2){
        alert("login was successfull!!");
    }else{
        console.log(count);
    //    window.location.href="E:\02-Unique-Hire\assingment-3.1\success login.html";

      //  funct.preventDefault();
       // window.location.href="../success login/success-login.html";
        alert("prevented");
    }
   // window.location.href="../success login/success-login.html";
});

function validateUser(){
    if(user.value==''){
        setErrorFor(user, 'Username cannot be blank');  // calling function by parameter

    }else if(user.value.length >20){
        setErrorFor(user, 'Username must not be greater than 20 char');  // calling function by parameter
    }   
    else     if(user.value.length<5){
        setErrorFor(user,"Username must not be lesser than 5 char");
    } else{
        setSuccessFor(user); 
        count++;
       // return true;
    }
}   

function validatePass(){
    const passValue=pass.value;
  //  console.log(passValue);
    if(passValue==''){
        setErrorFor(pass,'Please dont leave Empty');
    }
    else if(!passValue.match(/[a-z]/g)){
        setErrorFor(pass,'Enter atleast 1 small letter');
    }else if(!passValue.match(/[A-Z]/g)){
        setErrorFor(pass,'Enter atleast 1 capital letter');
    }
    else if(!passValue.match(/[0-9]/g)){
        setErrorFor(pass,'Enter atleast 1 Number ');
    }
     else if(!passValue.match(/[#?!@$%^&*-]/g)){
         setErrorFor(pass,'Enter atleast 1 Special character');
     }
    else if(!passValue.length>=8){
        setErrorFor(pass,'password should be greater than 8 character');
    }
     else{
        setSuccessFor(pass);
        count++;
        return true;
    }
    console.log(count);
}
function setErrorFor(input,message){                         // input=firstname, message=username canntt be black
    const formControl = input.parentElement;                 // targetting div  element
  //  console.log(input.value+input.parentElement.nodeName);
    formControl.className='form-control error';

    const small = formControl.querySelector('small');
    small.innerText=message;
}
function setSuccessFor(input){
    const formControl = input.parentElement;
   // console.log(input.parentElement);
    formControl.className='form-control success';
}