// Initialization
let open = document.querySelector(".dialog");
let open_btn = document.querySelector(".hr-btn");
let up = document.querySelector(".up");
let bar = document.querySelector(".head-bar");
let head_card = document.querySelector(".head-card"); 
let icon_title = document.querySelectorAll(".icon-title"); 
let hr_icon = document.querySelectorAll(".hr-icon"); 
// Program
open.style.display = "none";
up.style.display = "none";
// Function
open_btn.onclick = () => {
    if (open.style.display === "none") {
        open.style.display = "block";
    }
    else {
        open.style.display = "none";
    }
}
up.onclick = () => {
    window.scrollTo(0, 0);
}
// Scrolling
window.onscroll = () => {
    if (window.scrollY >= 500) {
        up.style.display = "block";
    }
    else {
        up.style.display = "none";
    }

    if (window.scrollY >= 507) {
        bar.style.cssText = "position: fixed ;top:0 ; left: 6%;  background-color: rgba(255, 255, 255, 0.95); z-index : 999 ;";
        open.style.cssText = "position : fixed; display: none;";
    }
    else {
        bar.style.position = "static";
        open.style.cssText = "position : absolute; display: none;";
    }
}
window.onload = ( )=>{
    head_card.style.cssText = "animation: appear 1.5s 1 ;";
}
for( let i =0; i< icon_title.length ; i++){
icon_title[i].onclick = ()=>{
    hr_icon.forEach((e)=>{
        e.style.cssText = "";
    })
hr_icon[i].style.cssText = "width: 100%; background-color: #B67232; height: 2px; ";
}
}
