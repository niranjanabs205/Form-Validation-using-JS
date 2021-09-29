var validation = () =>{
    var name = document.getElementById("fname").value;
    if(name==""){
        document.getElementById("fname").style.borderColor="red";
    }else{
        document.getElementById("fname").style.borderColor="green";
    }
    
    //mobile no validation 
    let mpattern = /^[6-9]{9}$/;
    var mymobile = document.getElementById("mobile").value;
    if( ! mpattern.test(mymobile))
    {
        document.getElementById("mobile").style.borderColor="red";
    }else{
        document.getElementById("mobile").style.borderColor="green";
    }
    
    //email validation 
    var email = document.getElementById("emailid").value;
    
    let epattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    // mahesh123@gmail.com
    
    if( ! epattern.test(email) ){
        document.getElementById("emailid").style.borderColor="red";
    }else{
        document.getElementById("emailid").style.borderColor="green";
    }
    
    //password validation 
    var password = document.getElementById("pass").value;
    if( (password=="") || (password.length<6) )
    {
        document.getElementById("pass").style.borderColor="red";
    }else{
        document.getElementById("pass").style.borderColor="green";
    }
    
    //city validation 
    var city = document.getElementById("city").value;
    if(city==""){
        document.getElementById("city").style.borderColor="red";
    }else{
        document.getElementById("city").style.borderColor="green";
    }
    //textarea validation 
    var address = document.getElementById("address").value;
    if(address==""){
        document.getElementById("address").style.borderColor="red";
    }else{
        document.getElementById("address").style.borderColor="green";
    }
    
    //gender error 
    var m = document.getElementById("male").checked;
    var f = document.getElementById("female").checked;
    if((m==false) && (f==false)){
document.getElementById("gendererror").innerText = "Please Your gender !";
    }else{
document.getElementById("gendererror").innerText = "";			
    }
    
    //checkbox validation 
var tnc = document.getElementById("tnc").checked;
if(tnc==false){
document.getElementById("tncerror").innerText = "This field is required !";
}else{
document.getElementById("tncerror").innerText = "";
}
    
}