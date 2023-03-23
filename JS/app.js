const boot = document.querySelector(".super-container");
const lockpage = document.querySelector(".content");

setTimeout(() => {  
    boot.style.display = "none";
    lockpage.style.display = "block";
}, 
3000);