const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 80)
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle ('bx-x');
    navbar.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove ('bx-x');
    navbar.classList.remove('open');
};

//-------------------------------------------------------------------------------------------

const showPopupBtn = document.querySelector(".h-btn1");
const showPopupBtn2 = document.querySelector(".h-btn2"); // Add this line

const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");

// Show login popup
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
    formPopup.classList.remove("show-signup"); // Make sure the login form is shown
});

// Show signup popup when the "Sign Up" button is clicked
showPopupBtn2.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
    formPopup.classList.add("show-signup"); // Show the signup form
});

// Hide login popup
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

// Show or hide signup form
signupLoginLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove']("show-signup");
    });
});

//-------------------------------------------------------------------------------------------


// Filter Able ProjectGallery.
window.addEventListener('load', ()=>{
    let allTab = document.querySelectorAll('.tab');
    let allProject = document.querySelectorAll('.project');

    const removeActive=()=> allTab.forEach(tab=>{
        tab.classList.remove('tab-active')
    })
    allTab.forEach(tab=>{
        tab.addEventListener('click', (event)=>{
            removeActive();
            tab.classList.add('tab-active')

            let fillterName = event.target.getAttribute('data-name');

            allProject.forEach(project=>{
                let projectName = project.getAttribute('data-name')
                if((projectName == fillterName) || fillterName == 'All'){
                    project.style.display = '';
                }else{
                    project.style.display = 'none';
                }
            })
        });
    })
});