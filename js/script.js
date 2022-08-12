function closeTab (className) {
    console.log(className);
    const tab = document.querySelector(`.${className}`);
    tab.classList.add('closed');
}