const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSection = document.querySelectorAll('.main-content');

function pageTransition(){
    //Button click active class
    for(let i=0; i< sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace ('active-btn','');
            this.className += 'active-btn';
        })
    }
}

pageTransition();