
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
// highlight twitter (default screen)
platformsArr.forEach(platform => {
    if (platform.children[0].getAttribute("src").includes('7')) {
        platform.classList.add('active');
        content.classList.add('active');
        placeholder.classList.remove('active')
    }
})

// show placeholder on click
platformsArr.forEach(platform => {
    platform.addEventListener('click', function (e) {
        // if it is twitter
        if (platform.children[0].getAttribute("src").includes('7')) {
            // do smth if it is not active only
            if (!platform.classList.contains('active')) {
                removeActivePlatformClass(platformsArr);
                platform.classList.add('active');
                content.classList.add('active');
                placeholder.classList.remove('active')
            }
        }
        else {
            removeActivePlatformClass(platformsArr);
            platform.classList.add('active');
            placeholder.classList.add('active');
            content.classList.remove('active');
        }
    });
});

// remove active clsss names
function removeActivePlatformClass (arr) {
    arr.forEach(platform => {
        platform.classList.remove("active");
    })
}
