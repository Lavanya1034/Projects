//login form validation

let form = document.getElementById("form");
let nameErr = document.getElementById("nameErr");
let emailErr = document.getElementById("emailErr");
let passErr = document.getElementById("passErr");
let conPassErr = document.getElementById("conPassErr");
let input=document.querySelectorAll(".input");

//autofocusing to next input field
input.forEach((inp,index)=>{
    inp.addEventListener("keydown",(e)=>{
        if(e.key==="Enter"){
            if(index !==4){
                e.preventDefault();
                input[index+1].focus();
            };
            ;
        }
    })
 })

 //if we click on eye symbol for password to show the password- also applies to
 //confirm password eye symbol
 let eye = document.querySelectorAll(".passEyeSym");
 eye.forEach((element,index)=>{
    element.addEventListener("click",()=>{
        let passInp = document.querySelectorAll(".passShow");
        let typePass = passInp[index].getAttribute("type");
        if(typePass==="password"){
            passInp[index].setAttribute("type","text");
            element.classList.remove("fa-eye");
            element.classList.add("fa-eye-slash");
        }else{
            passInp[index].setAttribute("type","password");
            element.classList.remove("fa-eye-slash");
            element.classList.add("fa-eye");
    
        }    
     })    
 })
 

//function to validate values in form

function validation(forminp){
    //to log the erros 
    let error={};
    let nameRegex = /^[a-zA-Z0-9]+$/;
    let regex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/;
    
    if(!forminp.name){
        error.name="Name cannot be empty.";
    }else{
        if((forminp.name).length<3 || (forminp.name).length >20){
            error.name = "Name must be between 3 - 20 characters";
        }else if(!nameRegex.test(forminp.name)){
            error.name = "Invalid Name";
        }
    }
    
    //validation for email
    if(!forminp.email){
        error.email="Email cannot be empty.";
    }else{
        if(!regex.test(forminp.email)){
            error.email="Please enter valid email";
        }
    }
    //validation for password
    if(!forminp.password){
        error.password="Password cannot be empty.";
    }else{
        if((forminp.password).length<6 || (forminp.password).length>10){
            error.password="Password must be between 6-10 characters long";
        }else if(!passRegex.test(forminp.password) ){
            error.password="Please enter valid password";
    }
    }
    if(forminp.conPass !==forminp.password){
        error.conPass="Passwords don't match.";
    }
    return error;
}

//when form is submitted
form.addEventListener("submit",(event)=>{
    //prevent to refresh when we press enter
    event.preventDefault();
    let formVal = event.target;
    //changing to array
    let formArr = Array.from(formVal);

    //create a obj with input values of form and can validate

    let formObj={
        name:formArr[0].value.trim(),
        email:formArr[1].value.trim(),
        password:formArr[2].value.trim(),  
        conPass:formArr[3].value.trim()
    }
    
    let errors = validation(formObj);

    if(Object.keys(errors).length>0){
        nameErr.textContent=errors.name || "";
        emailErr.textContent=errors.email || "";
        passErr.textContent=errors.password || "";
        conPassErr.textContent=errors.conPass || "";

        //while attempting to change the text in input , the error is removed
        formArr.forEach((inp,index)=>{
            inp.addEventListener("change",(e)=>{
                let spans = document.querySelectorAll(".err");
                spans[index].textContent="";               
                
            })
        })
    }else{
        //reset the error texts which is obtained previously if any.
        nameErr.textContent="";
        emailErr.textContent="";
        passErr.textContent="";
        conPassErr.textContent="";
        formArr.forEach((e)=>e.value="");  
        //hint: to open in same page can use---
        //window.location.href="signup.html";
        
        //to open in new page
        window.open("signup.html","_blank");
        //to refresh the initial parent page after some time
        setTimeout(()=>{
            location.reload();
        },1000);       
        
    }
})