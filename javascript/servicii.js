const prod1 = document.getElementById("prod1");
const prod2 = document.getElementById("prod2");
const prod3 = document.getElementById("prod3");
function openProd1Page() {
    window.location.replace("prod1.html");
}
prod1.addEventListener("click", openProd1Page);
function openProd2Page() {

    window.location.replace("prod2.html");
}
prod2.addEventListener("click", openProd2Page);
function openProd3Page() {
    window.location.replace("prod3.html");
}
prod3.addEventListener("click", openProd3Page);