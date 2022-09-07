
// burger menu
const iconMenuWrap = document.querySelector('.menu__icon-wrap');
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

if(iconMenu){
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('_locked');
        iconMenu.classList.toggle('_active-menu');
        menuBody.classList.toggle('_active-menu');
    });
}

//Smooth scroll
const menuLinks = document.querySelectorAll('.menu-link[data-goto]');

if(menuLinks.length > 0){
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick);
    });
    function onMenuLinkClick (e) {
        
        const menuLink = e.target;
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            console.log(gotoBlock);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;
            console.log();
            // burger menu closed after click
            if(iconMenu.classList.contains('_active-menu')){
                document.body.classList.remove('_locked');
                iconMenu.classList.remove('_active-menu');
                menuBody.classList.remove('_active-menu');
            }
            console.log(gotoBlockValue);
            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

// header fixed
const header = document.querySelector('header');
function checkScroll() {
    let scrollPos = window.scrollY;
    if ((scrollPos > 80) || (window.innerWidth < 812)) {
        header.classList.add("header--fixed");
    }
    else {
        header.classList.remove("header--fixed")
    }
}
document.addEventListener("DOMContentLoaded", checkScroll);
window.addEventListener("scroll", checkScroll);

// resize adaptive login move
// window.addEventListener('resize', () =>{
//     if (window.screen.width >900) {
//         console.log('fuzz');
        
//     }
//     else{
//         console.log('buzz');
        
//     }
    
// });

const parentOriginal = document.querySelector('.header__container');
const targetParent = document.querySelector('.header__menu');
const mobileTarget = document.querySelector('.menu__list');
const loginWrap = document.querySelector('.header__login-wrap');
window.addEventListener("DOMContentLoaded", moveForm)
window.addEventListener('resize', moveForm);
function moveForm(event){
    const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if(viewportWidth <= 910 && viewportWidth >= 360){
        targetParent.insertBefore(loginWrap, targetParent.children[0]);
    }
    else if(viewportWidth < 360){
        mobileTarget.insertBefore(loginWrap, mobileTarget.children[mobileTarget.children.length]);
    }
    else {
        parentOriginal.insertBefore(loginWrap, parentOriginal.children[parentOriginal.children.length]);
    }
}