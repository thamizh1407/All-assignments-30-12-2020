//  dtae and time
var d = new Date();
document.getElementById("demo").innerHTML = d;

var hour=d.getHours();
document.getElementById("hours").innerHTML=hour;

var sec=d.getSeconds();
document.getElementById("sec").innerHTML=sec;

var min=d.getMinutes();
document.getElementById("min").innerHTML=min;

//  end of date and time
function largestNum(){
    var larg=Math.max(250,452,999,56,54,32);
    document.getElementById("larger-num-disp").innerHTML=larg;
}

function conversion(){
    var far=document.getElementById("degree-conversion").value;
    var farNum=parseInt(far);
    
    var cel=(farNum-32) * (5/9) ;
    document.getElementById("celcious").innerHTML=cel;
   // var celcious= far
}

function conversionToFarent(){
    var cel=document.getElementById("celc-to-far").value;
    var celNum=parseInt(cel);
    
    var far=celNum * (9/5) +32 ;
    document.getElementById("Farent").innerHTML=far;
   // var celcious= far
}
function areaOfTriangle(){
    var length=document.getElementById("length").value;
    var breadth=document.getElementById("breadth").value;

    var area=(1/2)*length*breadth;

    document.getElementById("triangle").innerHTML=area;
}

function add(){
    var inpAdd1=document.getElementById("first-num").value;
    var inpAdd2=document.getElementById("second-num").value;
    var paInpAdd1=parseInt(inpAdd1);
    var paInpAdd2=parseInt(inpAdd2);

    var resAdd=paInpAdd1+paInpAdd2;
    console.log(resAdd);

    document.getElementById("resultadd").innerHTML=resAdd;
    return true;
}

function mul(){
    var inpMul1=document.getElementById("first-num-mul").value;
     var inpMul2=document.getElementById("second-num-mul").value;
    var paInpMul1=parseInt(inpMul1);
    var paInpMul2=parseInt(inpMul2);
    var resMul=paInpMul1 * paInpMul2;
    console.log(resMul);
    document.getElementById("resultMul").innerHTML=resMul;
}
function div(){
    var inpdiv1=document.getElementById("first-num-div").value;
    var inpdiv2=document.getElementById("second-num-div").value;
    var paInpDiv1=parseInt(inpdiv1);
    var paInpDiv2=parseInt(inpdiv2);
    var resDiv=paInpDiv1/paInpDiv2;
    console.log(resDiv);
    document.getElementById("resultDiv").innerHTML=resDiv;
}

function sub(){
    var inpsub1=document.getElementById("first-num-sub").value;
    var inpsub2=document.getElementById("second-num-sub").value;

    var paInpSub1=parseInt(inpsub1);
    var paInpSub2=parseInt(inpsub2);
    var resSub=paInpSub1-paInpSub2;
    console.log(resSub);
    document.getElementById("resultSub").innerHTML=resSub;
}
function areaOfCircle(){
        var radius=document.getElementById("radius").value;
        var r=parseInt(radius);
        Area=(3.14*r*r);
        document.getElementById("circle").innerHTML=Area;
}

function gravity(){
    var mass1=document.getElementById("mass1").value;
    var mass2=document.getElementById("mass2").value;
    var dist=document.getElementById("dist").value;

    var M1=parseInt(mass1);
    var M2=parseInt(mass2);
    var D=parseInt(dist);

    var force = 9.8 * ((M1*M2)/Math.pow(D,2));
    var attraction = force/M2;
   // alert(attraction);
    document.getElementById("attract").innerHTML=attraction;


}
function pyth(){
    var a=document.getElementById("a").value;
    var b=document.getElementById("b").value;

    var A=parseInt(a);
    var B=parseInt(b);

    var hyp=Math.sqrt(Math.pow(A,2)+Math.pow(B,2));
    document.getElementById("hypoten").innerHTML=hyp;

}






// select all the buttons
const buttons = document.querySelectorAll('button');
// select the <input type="text" class="display" disabled> element
const display = document.querySelector('.display');

// add eventListener to each button
buttons.forEach(function(button) {
  button.addEventListener('click', calculate);
});
// calculate function
function calculate(event) {
  // current clicked buttons value
  const clickedButtonValue = event.target.value;

  if (clickedButtonValue === '=') {
    // check if the display is not empty then only do the calculation
    if (display.value !== '') {
      // calculate and show the answer to display
      display.value = eval(display.value);
    }
  } else if (clickedButtonValue === 'C') {
    // clear everything on display
    display.value = '';
  } else {
    // otherwise concatenate it to the display
    display.value += clickedButtonValue;
  }
}

