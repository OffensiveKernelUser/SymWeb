const standby = document.querySelector(".content");
const clockElement = document.querySelector(".clock");
const loginForm = document.querySelector(".login-form");

function LaunchLogin() {
    clock.style.marginTop = "-100%";
    standby.style.filter = "blur(14px)";
    standby.style.transform = "scale(1.1)";
    loginForm.style.display = "flex";
}

standby.addEventListener("keyup", (event) => {
    console.log(event.key);
    if ( event.key == " " || event.key == "Enter") {
        LaunchLogin();
    }
});

standby.addEventListener("mouseup", () => {
    LaunchLogin();
});

