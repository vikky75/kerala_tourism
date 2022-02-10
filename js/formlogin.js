var email=document.getElementById("email");
var error=document.getElementById("error");
var pwd=document.getElementById("pwd");
var perror=document.getElementById("perror");
function validate()
{
    
 // ...........email................
    function emailval()
    {
    let regexp=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/;
    
    if(regexp.test(email.value))
    {
        error.innerHTML="This is your registered email address ";
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
// ..............pwd......................
function pwdval()
    {
        let regexp2= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        if (regexp2.test(pwd.value)) {
            perror.innerHTML="Valid";
            perror.style.color="green";
            return true;
        }

        else
        {
            perror.innerHTML="Password should contains at least eight characters, including at least one number and includes both lower and uppercase letters and special characters, for example #, ?, !.";

            perror.style.color="red";
            pwd.style.border="2px solid red";
        pwd.value="";
        
            return false;
        }
    }
    // .....pwd ends.....
    return emailval() && pwdval() ;
}