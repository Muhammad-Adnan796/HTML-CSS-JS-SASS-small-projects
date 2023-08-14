let taskBar = document.getElementsByClassName("taskbar")[0];
let startMenu = document.getElementsByClassName("startmenu")[0];


taskBar.addEventListener("click",()=>{
    console.log("Clicked")
    if(startMenu.style.bottom == "45px"){
        startMenu.style.bottom = "-655px"
    }else{
        startMenu.style.bottom = "45px"
    }
})