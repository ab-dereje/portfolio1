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
    //section Active
    allSection.addEventListener('click',(e) =>{
        const id= e.target.dataset.id;
        if (id){
            //remove active btn
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')
            //hide other section
            sections.forEach((section)=>{
                section.classList.remove('active')
            })
            const element = document.getElementById(id)
            element.classList.add("active");
        }
    })
}

pageTransition();

// Add event listener to each button
// sectBtn.forEach(sectBtn =>{
//     sectBtn.addEventListener('click',()=>{
//         //Remove active class from current active button
//         const currentBtn =document.querySelector('.active-btn');
//         currentBtn.classList.remove('active-btn');

//         // add active class to clicked button
//         sectBtn.classList.add('active-btn');
//     });
// });