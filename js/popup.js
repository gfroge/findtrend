const popupLinks = document.querySelectorAll('.link--popup');
const body = document.querySelector('body');
const fixedForPopup = document.querySelectorAll('.fixed-for-popup');

let unlock = true;
const timeout = 300;

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener('click', function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const targetPopup = document.getElementById(popupName);
            openPopup(targetPopup);
            e.preventDefault();
        });
    }
}
const popupCloseLinks = document.querySelectorAll('.popup__close');
if (popupCloseLinks.length > 0) {
    for (let i = 0; i < popupCloseLinks.length; i++) {
        const link = popupCloseLinks[i];
        link.addEventListener('click', function (e) {
            closePopup(link.closest('.popup'));
            e.preventDefault();
        });
    }
}

function openPopup(p) {
    if (p && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            closePopup(popupActive, false);
        }
        else {
            lockBody();
        }
        p.classList.add('open');
        p.addEventListener('click', function (e) {
            if (!e.target.closest('.popup__content')) {
                closePopup(e.target.closest('.popup'))
            }
        });
    }
}
function closePopup(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            unlockBody();
        }
    }
}

function lockBody() {
    const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth + 'px';
    if (lockPaddingValue.length > 0) {
        for (let i = 0; i < fixedForPopup.length; i++) {
            const el = fixedForPopup[i];
            el.style.paddingRight = lockPaddingValue;
        }
    }
    body.style.paddingRight = lockPaddingValue;
    header.style.paddingRight = lockPaddingValue;
    body.classList.add('popup-lock');

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

function unlockBody() {
    setTimeout(function () {

        if (fixedForPopup.length > 0) {
            for (let i = 0; i < fixedForPopup.length; i++) {
                const el = fixedForPopup[i];
                el.style.paddingRight = '0px';
            }
        }
        body.style.paddingRight = '0px';
        header.style.paddingRight = '0px';
        body.classList.remove('popup-lock');
    }, timeout);

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}
const popupBackgroundArray = document.querySelectorAll('.popup__body');
if (popupBackgroundArray.length > 0) {
    for (let i = 0; i < popupBackgroundArray.length; i++) {
        const el = popupBackgroundArray[i];
        el.addEventListener('click', function (e) {
            const popupOpened = document.querySelector('.popup.open');
            if (e.target == popupOpened) {
                closePopup(popupOpened);
            }

        });
    }
}
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        const popupOpened = document.querySelector('.popup.open');
        closePopup(popupOpened);
    }
});

(function () {
    if (!Element.prototype.closest) {
        Element.prototype.closest = function (css) {
            var node = this;
            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }
})();
(function () {
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.matchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector;
    }
})();