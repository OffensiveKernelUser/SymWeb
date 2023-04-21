const boot = document.querySelector(".super-container");
const lockpage = document.querySelector(".content");

setTimeout(() => {  
    boot.style.display = "none";
    lockpage.style.display = "block";
}, 
0000); // default value: 3000, 0000 is for development purposes
