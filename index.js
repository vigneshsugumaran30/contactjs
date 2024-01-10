const nameInput=document.querySelector("#name");
const email=document.querySelector("#email");
const password=document.querySelector("#password");
const message=document.querySelector("#message");
const success=document.querySelector("#success");
const errorNodes=document.querySelectorAll(".error");


function validateform()
{
    clearmessage();
    let errorflag=false;
    if(nameInput.value.length<1)
    {
        errorNodes[0].innerText="Name cannot be blank";
        nameInput.classList.add("error-border");
        errorflag=true;
    }
    if(!emailIsValid(email.value))
    {
        errorNodes[1].innerText="Invalid email";
        email.classList.add("error-border");
        errorflag=true;
    }
    if(!passwordIsValid(password.value))
    {
        errorNodes[2].innerText="enter correct password";
        password.classList.add("error-border");
        errorflag=true;
    }
    if(message.value.length<1)
    {
        errorNodes[3].innerText="Enter the message";
        message.classList.add("error-border");
        errorflag=true;
    }
    if(errorflag==false)
    {
        success.innerHTML="Form validation successful";
    }
    

}
function  clearmessage()
{
    for(let i=0;i<errorNodes.length;i++)
    {
        errorNodes[i].innerHtml=" ";
    }
    success.innerText="";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    password.classList.remove("remove-border");
    message.classList.remove("error-border");
}
function emailIsValid(email)
{
    let pattern=/[^\s@]+@[^\s@]+\.[^\s@]+/;
    return pattern.test(email);
}
function passwordIsValid(password)
{
    let pattern=/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;
    return pattern.test(password);
}