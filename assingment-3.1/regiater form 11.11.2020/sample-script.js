console.log("executed submit");
//  trim is used to remover the white spaces
const fnameValue=firstname.value;
const lnameValue=lastname.value;
const emailValue=email.value;
const mob=mobile.value;

const gen=gender.value;
const dobValue=dob.value.trim();
const add=address.value.trim();
const cit=city.value.trim();

const pinc=pincode.value.trim();
const stateValue=state.value.trim();
const coountryValue=country.value.trim(); 
// const hob=hobbies.value.trim();

// const qua=qual.value.trim();
// const deg=degree.value.trim();
const passValue=pass.value;
const rePassValue=rePass.value;

//first ame validation
if(fnameValue === ''){
     document.getElementById("errorMsg-first").innerHTML="You cannot leave  empty";    
}
if(fnameValue !== ''){
document.getElementById("errorMsg-first").innerHTML="";    
}
if(fnameValue.length>21){
document.getElementById("errorMsg-first").innerHTML="Enter less than 20 characters";    
}
  //first ame validation   ends

//last name validation
if(lnameValue === ''){
    document.getElementById("errorMsg-last").innerHTML="You cannot leave  empty";    
}
if(lnameValue !== ''){
document.getElementById("errorMsg-last").innerHTML="";    
}
if(lnameValue.length<20&lnameValue.length>10){
document.getElementById("errorMsg-last").innerHTML="Enter characters greater than 10 and less than 20";    
}
// email validation validation

if (!filter.test(emailValue)){
    document.getElementById("errorMsg-email").innerHTML="please provide a valid email address";    
}else{
    document.getElementById("errorMsg-email").innerHTML="";    
}
//mobile number validation
if(mob.length===0){
    document.getElementById("errorMsg-mobile").innerHTML="Please dont leave empty";    
}

if(mob.length !=10){
    document.getElementById("errorMsg-mobile").innerHTML="Please enter number  within 10 digits";    
}
if(mob!==''){
    document.getElementById("errorMsg-mobile").innerHTML="";    
}

// gender validation validation
if(gender[0].checked == true || gender[1].checked == true){
    
}else{
    document.getElementById("errorMsg-gender").innerHTML="check any one box";    

}


