let darkMode = false;
let btn = document.querySelector(".btn");
btn.addEventListener("click",()=>{
    darkMode = !darkMode;
    if (darkMode){
        document.body.style.backgroundColor = "black" ;
    } else {
        document.body.style.backgroundColor = "white" ;
    }
});
// by Hassan Khan.
