let container1 = document.getElementById("pj1");
let containerOp1 = document.getElementById("pj1Options");
let container2 = document.getElementById("pj2");
let containerOp2 = document.getElementById("pj2Options");

function switchOpstions1() {
    container1.style.zIndex=1;
    containerOp1.style.display='block';
}
function switchInfo1() {
    container1.style.zIndex=2;
    containerOp1.style.display='none';
}

function switchOpstions2() {
    container2.style.zIndex=1;
    containerOp2.style.display='block';
}
function switchInfo2() {
    container2.style.zIndex=2;
    containerOp2.style.display='none';
}

const open = document.getElementById("open");
const close = document.getElementById("close");
const nav = document.getElementById("nav");

open.addEventListener('click', () => {
    nav.classList.add('header__list--visible');
    nav.classList.remove('header__list--hidden');
});

close.addEventListener('click', () => {
    nav.classList.remove('header__list--visible');
    nav.classList.add('header__list--hidden');
});