const form=document.getElementById("form");
var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{3,5})+$/;
// values from input boxes

const firstname=document.getElementById("first-name");
const lastname=document.getElementById("last-name");
const email=document.getElementById("Email");
const mobile=document.getElementById("mobile-num");
//gender ar dec
var gender=document.getElementsByName("gender");


const dob=document.getElementById("date-of-birth");
const address=document.getElementById("Address");
const city=document.getElementById("City");

const pincode=document.getElementById("Pincode");
const state=document.getElementById("State");
const country=document.getElementById("Country");
 const hobbies=document.getElementById("hobby");

 const qual=document.getElementById("qualifications");
const degree=document.getElementById("degree");
const degreeClass=document.getElementsByClassName('degree-class');
const degreeClassName=document.getElementsByClassName('inp-layout');
const pass=document.getElementById("pass");
const rePass=document.getElementById("re-pass");

//console.log(degree.length);

const filterPass = "(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$";
const count=0;
var checked=0;
var checkedhobbie=0;


form.addEventListener("keyup", e=>{
    var success=0;
        checkMobile();        
         checkdob();
         stateValidate();
         checkLastname(); 
         checkPincode();
         checkFirstname();
         checkCity();
         checkEmail();
          checkGender();
          countvalidate();
         // validateCheck();
            hobbiess();
        //  qualification();
          checkPass1();
          checkRePass();
         // checkDegree();
            successValidation();
            function successValidation(){
                console.log("success"+success);
                if(success>0)
                {
                 e.preventDefault();
                  console.log("preventedefault activated"+success);
                }if(success == 12){
                    console.log('success  value is = '+success);
                    alert("Success All the inpus are correct !!")
                }
            }





        function stateValidate(){
            const statevalue=state.value;
            if(statevalue === ''){
                setErrorFor(state, 'state cannot be blank');  // calling function by parameter
            }else
           // console.log(firstnamevalue.length);
            if(statevalue.length>10){
                setErrorFor(state,"state must not be greater than 10 char");
            }
            else {
                setSuccessFor(state); 
                success++;
            }
        }
        function checkMobile() {
           // alert(mobile.value.length);
            if(mobile.value==null){
                setErrorFor(mobile,'dont leave the box empty');
        
            }
            else
            if(mobile.value.length !==10){
                setErrorFor(mobile,'Please enter the number 10 digit');
            }else
             if(mobile.value.length === 10){
                setSuccessFor(mobile);
                success++;
        
            }
        }
        function checkdob(){
            console.log(dob.value);
            var dobValue=dob.value;
            var strdobValue=dobValue.split("-");
            console.log(strdobValue+"length is"+strdobValue.length);
            console.log("value"+strdobValue[0]);
            if(strdobValue ==null){
                setErrorFor(dob,"Please Enter the  date");
                
            }else if(strdobValue !==null  && strdobValue[0]<2010){
                setErrorFor(dob,"Please Enter date LGreater than year 2010 ");
            }else{
                console.log("Date contains");
                setSuccessFor(dob);
                success++;
        
            }
        }
        function hobbiess(){
            const checkHobbie=hobbies.getElementsByTagName('INPUT');
            console.log(checkHobbie);
            for(var p=0;p<checkHobbie.length;p++){
                if(checkHobbie[p].checked){
                    checkedhobbie++;
                }
            }
            if(checkedhobbie>0){
                console.log("success-hobbie");
                document.getElementById('check-hobbie').style.visibility='hidden';
                success++;
        
            }else{
                console.log("error-hobbie");
                document.getElementById('check-hobbie').style.visibility='visible';
        
            }
            checkedhobbie=0;
        }
        function qualification() {
            
            const check=qual.getElementsByTagName('INPUT');
            for(var i=0;i<check.length;i++){
                if(check[i].checked){
                    checked++;

                }
            }
            if(checked>0){
                console.log("success");
                document.getElementById('check-error').style.visibility='hidden';
                success++;

        
            }else{
                console.log("error");
                document.getElementById('check-error').style.visibility='visible';
        
            }
        
        }
        function checkDegree(){
            const degreeValue=degree.value;
            const selectedValue=degree.options[degree.selectedIndex].value;
            console.log("selected vlue"+selectedValue);
            //alert(degreeClass.parentElement);
            if(selectedValue === '')
            {
               // setErrorFor(degreeClass,'Please select any of the degree');
               document.getElementById('degree-error');
                console.log("error");
            }else{
                setSuccessFor(degreeClassName);
               // console.log("success");
               success++;
        
            }
        
        
        
        
            
            
        }
        function checkEmail(){
            const emailValue=email.value;
            if(emailValue.length===0){
                setErrorFor(email,"Please fill out the email address");
            }else
            if(!filter.test(emailValue)){
                setErrorFor(email,"Please enter the correct Email Id");
            }else {
              setSuccessFor(email);
              success++;
        
            }
            // alert(gender[0].value);
        }// end of check lastname
        function checkPass1(){
            const passValue=pass.value;
            console.log(passValue);
            var rePassValue=rePass.value;
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
                success++;
        
               // checkRePass();
            }
        }
        function checkRePass(){
            const repassValue=rePass.value;
            const passValue=pass.value;
            if(repassValue==''){
                setErrorFor(rePass,'Please re enter password')
        
            }
            else if(repassValue!==passValue){
                setErrorFor(rePass,'The password you have re-entered does not match')
            }else{
                success++;

                setSuccessFor(rePass);
        
            }
        }
        function checkFirstname(){
            const firstnamevalue=firstname.value;
            if(firstnamevalue === ''){
                setErrorFor(firstname, 'Username cannot be blank');  // calling function by parameter
            }else
           // console.log(firstnamevalue.length);
            if(firstnamevalue.length>20){
                setErrorFor(firstname,"Firstname must not be greater than 20 char");
            }else
            if(firstnamevalue.length<5){
                setErrorFor(firstname,"Firstname must not be lesser than 5 chara");
            }
            else {
                setSuccessFor(firstname); 
                success++;
        
            }
        }//end of check checkInputs
        function checkLastname(){
            const lastvalue=lastname.value;
            if(lastvalue === ''){
                setErrorFor(lastname, 'lastname cannot be blank');  // calling function by parameter
            }else
           // console.log(firstnamevalue.length);
            if(lastvalue.length>20){
                setErrorFor(lastname,"lastname must not be greater than 20 char");
            }else
            if(lastvalue.length<5){
                setErrorFor(lastname,"lastname must not be lesser than  5 charac ");
            }
            else {
                setSuccessFor(lastname); 
                success++;
        
            }
        }
        function countvalidate(){
            const countryvalue=country.value;
            if(countryvalue === ''){
                setErrorFor(country, 'Country cannot be blank');  // calling function by parameter
            }else
           // console.log(firstnamevalue.length);
            if(countryvalue.length>20){
                setErrorFor(country,"lastname must not be greater than 20 char");
            }
            else {
                setSuccessFor(country); 
                success++;
        
            }
        }
        function checkGender(){
           // alert("gender  male valie is  "+gender[0].checked);
           // alert("gender female  valie is  "+gender[1].checked);
        
            if(gender[0].checked == false && gender[1].checked == false){
                document.getElementById('check-gender').style.visibility='visible';
               // alert("false");
                console.log('gender value'+gender);
            }else
            {
                document.getElementById('check-gender').style.visibility='hidden';
                success++;
        
              //  alert("true");
        
            }
        }                                                                           // gender ends
        
        function checkCity(){
            const cityValue=city.value;
            if(cityValue.length==0){
                setErrorFor(city,'Dont leave the City box empty')
            }else
            if(cityValue.length>20){
                setErrorFor(city,'Please enter the character less than 20')
            }else{
                setSuccessFor(city);
                success++;
        
            }
        }                                                                     // city ends
        function checkPincode(){
            const cityValue=pincode.value;
            if(cityValue.length==0){
                setErrorFor(pincode,'Dont leave the City box empty')
            }else
            if(cityValue.length!==6){
                setErrorFor(pincode,'Pin code must be 7 numbers')
            }else{
                setSuccessFor(pincode);
                success++;
        
            }
        }
        function setErrorFor(input,message){                         // input=firstname, message=username canntt be black
            const formControl = input.parentElement;                 // targetting div  element
            console.log(input.value+input.parentElement.nodeName);
            formControl.className='form-control error';
        
            const small = formControl.querySelector('small');
            small.innerText=message;
        
        }
        function setSuccessFor(input){
            const formControl = input.parentElement;
            console.log(input.parentElement);
            formControl.className='form-control success';
        
        }
       


          

    
});
//alert("after degree");






