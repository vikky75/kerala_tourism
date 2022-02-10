var email=document.getElementById("email");
var error=document.getElementById("error");
var phone=document.getElementById("phone");
var error1=document.getElementById("error1");
var pwd=document.getElementById("pwd");
var error2=document.getElementById("error2");
var cpwd=document.getElementById("cpwd");
var error3=document.getElementById("error3");
var strength=document.getElementById("strength");

function validate()
{
    
 // ...........email................
    function emailval()
    {
    let regexp=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/;
    
    if(regexp.test(email.value))
    {
        error.innerHTML="This email address is valid";
        error.style.color="green"; 
        email.style.border="2px solid green";   
        return true;
        
    }
    else
    {
        error.innerHTML="Please enter a valid email address.";
        error.style.color="red";
        email.style.border="2px solid red";
            email.value="";
        return false;
    }
}
// .........phone..................
function phoneval()
    {
        let regexp1=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if(regexp1.test(phone.value))
        {
            error1.innerHTML="This phone number format is valid";
            error1.style.color="green";
            phone.style.border="2px solid green";
            
            return true;
        }
        else
        {
            error1.innerHTML="Please enter a valid email mobile number in format XXX XXX XXXX";
            error1.style.color="red";
            phone.style.border="2px solid red";
            phone.value="";
            return false;
        }
    }
    // .............pwd validation............
    function pwdval()
    {
        let regexp2= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        if (cpwd.value != pwd.value) {
            error3.innerHTML="Password and Confirm Password does not match";
            error3.style.color="red";
            pwd.style.border="2px solid red";
            cpwd.style.border="2px solid red";
            pwd.value="";
            cpwd.value="";
            return false;
        }
       
       
        

       
         if (pwd.value.length < 8) {
            error2.innerHTML="Password is too short";
            error2.style.color="red";
            pwd.style.border="2px solid red";
            pwd.value="";
            cpwd.value="";
            return false;
        }
         if (pwd.value.length > 15) {
            error2.innerHTML="Password is too long";
            error2.style.color="red";
            pwd.style.border="2px solid red";
            pwd.value="";
            cpwd.value="";
            return false;
        }       


        if (regexp2.test(pwd.value)) {
            error2.innerHTML="Valid";
            error2.style.color="green";
            return true;
        }

        else
        {
            error2.innerHTML="Password should contains at least eight characters, including at least one number and includes both lower and uppercase letters and special characters, for example #, ?, !.";

            error2.style.color="red";
            pwd.style.border="2px solid red";
        pwd.value="";
        cpwd.value="";
            return false;
        }
        
 
 }

return emailval() && phoneval() && pwdval() ;
}


// ............pwd srength.................
function passwordstrength() 
{
        
    var strongRegex = new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var enoughRegex = new RegExp("(?=.{8,}).*", "g");
    
    if (pwd.value.length == 0) {
        strength.innerHTML = 'Type Password';
    } else if (false == enoughRegex.test(pwd.value)) {
        strength.innerHTML = 'More Characters';
    } else if (strongRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:green;font-family:Franklin Gothic Medium;font-size:18px">Strong Password!</span>';
    } else if (mediumRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:orange;font-family:Franklin Gothic Medium;font-size:18px">Medium Password!</span>';
    } else {
        strength.innerHTML = '<span style="color:red;font-family:Franklin Gothic Medium;font-size:18px">Weak Password!</span>';
    }
    
}
