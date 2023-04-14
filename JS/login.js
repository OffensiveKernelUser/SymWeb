let standbyPage = document.documentElement;

standbyPage.addEventListener("keyup", (event) => {
    console.log(event.key);
    if ( event.key == " " ) {
        console.log("Yo da bald bruddah is watchin u");
    }
});