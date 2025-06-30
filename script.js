let Darkmode = false;
let btn = document.querySelector(".btn");
btn.addEventListener("click",()=>{
    Darkmode = !Darkmode;
    if (Darkmode){
        document.body.style.backgroundColor = "black" ;
    } else {
        document.body.style.backgroundColor = "white" ;
    }
});
// by Hassan Khan.
