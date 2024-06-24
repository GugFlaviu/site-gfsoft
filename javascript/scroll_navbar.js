const navbar = document.getElementById("navbar");
let measure = 180;
//hamburger
const menu_panel = document.getElementById("menu_fullscreen");
//animation out
const menu_btn = document.getElementById("btn_menu");
const close_menu = document.getElementById("close_menu");
const anim_out = [
    {
        transform: "translate(0, 0)"
    },
    {
        transform: "translate(1000px, 0)"

    }
];
const timing_h = 500;
function show() {
    menu_panel.style.display = "flex";
}
function hide() {
    menu_panel.animate(anim_out, timing_h);
    setTimeout(disableMenu, timing_h - 100)
}
function disableMenu() {
    menu_panel.style.display = "none";
}
menu_btn.addEventListener("click", show);
close_menu.addEventListener("click", hide);
//for navbar visibiliti
window.onscroll = function () {
    change_nav();
}
function change_nav() {
    if (document.body.scrollTop > measure || document.documentElement.scrollTop > measure) {
        navbar.style.background = "rgba(0,0,0,0.5)";
        navbar.style.backdropFilter = "blur(8px)";
    }
    else {
        navbar.style.background = "none";
        navbar.style.backdropFilter = "none";
    }
}
