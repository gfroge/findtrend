function closeTab(className) {
    console.log(className);
    const tab = document.querySelector(`.${className}`);
    tab.classList.add('closed');
}

const pricingSwitch = document.querySelector('.switch__button');
pricingSwitch.addEventListener('click', function(e){
    pricingSwitch.classList.toggle('toggle')
});