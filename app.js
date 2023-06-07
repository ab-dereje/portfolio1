const sections = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.controlls');
const secBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');
const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav-links');

const more = document.querySelector(".more");
const btn_text = document.querySelector(".btn-text1");

function PageTransitions() {

    // const themeBtn = document.querySelector('.theme-btn');
    // themeBtn.addEventListener('click', () => {
    //         let element = document.body;
    //         element.classList.toggle('light-mode');
    //     })
    //menu
    nav.style.display = "none";
    menu.addEventListener('click', () => {
        if (document.querySelector('.nav-links').style.display === "none") {
            nav.style.display = "flex";
            console.log("abu");
        } else {
            nav.style.display = "none";
        }
    })

    // about read more
    more.style.display = "none";
    document.querySelector(".btn-con1").addEventListener('click', () => {
        if (document.querySelector('.more').style.display === "none") {
            more.style.display = "inline";
            btn_text.innerHTML = "Read Less";
        } else {
            more.style.display = "none";
            btn_text.innerHTML = "Read More";
        }
    })
}
PageTransitions();