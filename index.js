

function calculate(){
    var h=parseFloat(document.querySelector("#height").value);
    var w=parseFloat(document.querySelector("#weight").value);
    
     var bmi=Math.round(w/(Math.pow(h/100,2)));
    
        resultel=document.querySelector("#result");
        if(h<=0 || w<=0 ){
        resultel.innerHTML="Please ! Enter correct values ";
        return;
        }
        resultel.innerHTML="Your BMI is : "+bmi;
       
        if(bmi<18.5){
            resultel.innerHTML +="<br>You are under weight!"
     }
     else if(bmi>=18.5 && bmi<=24.9){
        resultel.innerHTML +="<br>You are normal weight!"
     }
     else if(bmi>24.9 && bmi <=30){
        resultel.innerHTML +="<br>You are over weight!"
     }
     else{
        resultel.innerHTML+=" <br> you are obese";
     }
    }
