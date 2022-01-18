var stepFirstBtn = document.querySelector('.js-step-first');
var stepSecondBtn = document.querySelector('.js-step-second');
var stepThirdBtn = document.querySelector('.js-step-three');

var cartFirstTab = document.querySelector('.cart-tab-1');
var cartSecondTab = document.querySelector('.cart-tab-2');
var cartThirdTab = document.querySelector('.cart-tab-3');
var cartFourthTab = document.querySelector('.cart-tab-4');

if (stepFirstBtn) {
    stepFirstBtn.addEventListener('click', function() {
        event.preventDefault();
        cartSecondTab.classList.remove('inactive');
        cartSecondTab.click();
        window.scrollTo(pageXOffset, 0);

        cartFirstTab.classList.add('right');
        cartSecondTab.classList.add('left');
    });
};

if (stepSecondBtn) {
    stepSecondBtn.addEventListener('click', function() {
        event.preventDefault();
        cartThirdTab.classList.remove('inactive');
        cartThirdTab.click();
        window.scrollTo(pageXOffset, 0);

        cartFirstTab.classList.add('right2');
    });
};

if (stepThirdBtn) {
    stepThirdBtn.addEventListener('click', function() {
        event.preventDefault();
        cartFourthTab.classList.remove('inactive');
        cartFourthTab.click();
        window.scrollTo(pageXOffset, 0);

        cartFirstTab.classList.add('right3');
    });
};
