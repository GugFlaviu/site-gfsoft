const img = document.getElementById('carusel');
const next = document.getElementById('next');
const previos = document.getElementById('previos');
let i = 0;
let autoChangeInterval = setInterval(add, 3000);

//animations
const anim_in = [
    {
        opacity: "0"
    },
    {
        opacity: "1"
    }
];
const timing = {
    duration: 1000,
};

//buttons
next.addEventListener("click", function click() {
    clearInterval(autoChangeInterval);
    add();
    autoChangeInterval = setInterval(add, 3000); // Restart automatic interval
});

previos.addEventListener("click", function click() {
    clearInterval(autoChangeInterval);
    minus();
    autoChangeInterval = setInterval(add, 3000); // Restart automatic interval
});

//change the images
function check() {
    if (i > 2) {
        i = 0;
    }
    if (i < 0) {
        i = 2;
    }
    switch (i) {
        case 0:
            img.animate(anim_in, timing);
            img.style.backgroundImage = 'url("/images/cariere/img_bottom.png")';
            break;
        case 1:
            img.animate(anim_in, timing);
            img.style.backgroundImage = 'url("/images/cariere/img_bottom3.jpg")';
            break;
        case 2:
            img.animate(anim_in, timing);
            img.style.backgroundImage = 'url("/images/cariere/img.jpg")';
            break;
    }
}

function add() {
    i += 1;
    check();
}

function minus() {
    i -= 1;
    check();
}
