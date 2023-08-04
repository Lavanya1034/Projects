let colour = document.querySelectorAll(".colour")
let color = Array.from(colour);
let body = document.getElementById("body")



color.forEach((box)=>{
    box.addEventListener("click",()=>{
            let colorSet = box.getAttribute("id")
            body.style.backgroundColor =colorSet;

    })
})