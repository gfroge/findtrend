
// tab animation
function closeTab(className) {
    console.log(className);
    const tab = document.querySelector(`.${className}`);
    tab.classList.add('closed');
}

// first screen scroll
const startButton = document.querySelector('.start__button');
startButton.addEventListener('click', function (e) {
    scrollSmoothly('.open');
    e.preventDefault()
});


// smooth scroll
function scrollSmoothly(targetClass) {
    const gotoBlock = document.querySelector(targetClass);

    const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top + scrollY
        - document.querySelector('header').offsetHeight;

    window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
    });
}

// price toggle
const priceCollection = document.querySelectorAll('.pricing-option__price-wrap');
const priceArr = Array.from(priceCollection);
const pricingSwitch = document.querySelector('.switch__button');

pricingSwitch.addEventListener('click', function (e) {
    pricingSwitch.classList.toggle('toggle')
    priceArr.forEach(priceWrap => {
        priceWrap.classList.toggle('active');
    });
});

// platforms 
const platformsArr = Array.from(document.querySelectorAll('.platform'));
const content = document.querySelector('.platforms__content');
const placeholder = document.querySelector('.platforms__placeholder');
platformsArr.forEach(platform => {
    platform.addEventListener('click', function (e) {
        alert()
        if (platform.getAttribute("href").includes('7')) {
            if (!content.classList.contains('active')) {
                content.classList.add('active');
                placeholder.classList.remove('active')
            }
            else{
                content.classList.remove('active');
                placeholder.classList.add('active');
            }
        }
    });
});
