

window.addEventListener("resize", onResize);

function onResize(){
    const mainLogo = document.querySelector("#main-logo")
    if (window.outerWidth < 450){
        mainLogo.setAttribute("viewBox", "0 -20 240 80");
        mainLogo.setAttribute("width", "120");
    } else {
        mainLogo.setAttribute("viewBox", "0 0 240 39")
        mainLogo.setAttribute("width", "240")
    }
}



