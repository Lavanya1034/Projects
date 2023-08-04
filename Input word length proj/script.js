//length of inout word

let inp = document.getElementById("inp")
let btn = document.getElementById("btn")
let value = document.getElementById("value")

btn.addEventListener("click",()=>{
    
    if(inp.value.length>0){
        value.textContent=inp.value.length;
        inp.value="";
    }
    
})