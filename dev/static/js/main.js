// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

var body = document.querySelector('.body');
var menuOpener = document.querySelector('.nav__toggle');
var menu = document.querySelector('.nav__list');

if (menuOpener) {
    menuOpener.addEventListener('click', function() {
        event.preventDefault();
        menuOpener.classList.toggle('opened');
        menu.classList.toggle('opened');
    });
};

var upperItem = document.getElementsByClassName('faq__body-item');
var elNodes = document.querySelectorAll(".faq__body-item");
//
for (var i = 0; i < upperItem.length; i++) {
    var elem = upperItem[i];
    elem.addEventListener("click", function() {
        event.preventDefault();
        this.classList.toggle("active");
    });
}

var upperItem2 = document.getElementsByClassName('s-filter__item');
var elNodes = document.querySelectorAll(".s-filter__item");
var filterList = document.querySelector('.s-filter__list');

for (var i = 0; i < upperItem2.length; i++) {
    var elem = upperItem2[i];
    elem.addEventListener("click", function() {
        event.preventDefault();
        filterList.classList.toggle("active");
    });
}

var deliveryItem = document.getElementsByClassName('delivery__item');
var elNodes = document.querySelectorAll(".delivery__item");
var zoneList = document.querySelector('.delivery__list');

for (var i = 0; i < deliveryItem.length; i++) {
    var zone = deliveryItem[i];
    zone.addEventListener("click", function() {
        event.preventDefault();
        zoneList.classList.toggle("active");
    });
}

$('.js-popup-opener').on('click', function() {
    const popupId = $(this).attr('data-modal');
    $(popupId).addClass('active');
    $('body').addClass('no-scroll');
    $('body').removeClass('dimmed');
});

$('.js-popup-closer').on('click', function() {
    $(this).closest('.js-popup-wrap').removeClass('active');
    $('body').removeClass('no-scroll');
    $('body').removeClass('dimmed');
});

$('.js-popup-wrap').on('click', function(event) {
    if (!$(event.target).closest('.js-popup-inner').length) {
        $(this).removeClass('active');
        $('body').removeClass('no-scroll');
        $('body').removeClass('dimmed');
    }
});

$('.nav__controls-item--cart').on('click', function() {
    $('.nav-cart').toggleClass('cartOpened');
});

$('.body').on('click', function(event) {
    if (!$(event.target).closest('.nav-cart').length && !$(event.target).closest('.nav__controls').length) {
        $('.nav-cart').removeClass('cartOpened');
    };
});

var btns = document.getElementsByClassName('s-content__days-btn');
var elNodes = document.querySelectorAll(".s-content__days-btn");
var daysFilter = document.querySelector('.s-content__filter-list');

for (var i = 0; i < btns.length; i++) {
    var elem = btns[i];

    elem.addEventListener("click", changeActiveClass);
}

function changeActiveClass(e) {
    event.preventDefault();

    for (var i = 0; i < btns.length; i++) {
        var elem = btns[i];
        elem.classList.remove('active');
        var daysData = this.getAttribute("data-value");
        daysFilter.setAttribute("data-days", daysData);
    }

    e.target.classList.add('active');
}

var consultForm = document.querySelector('.consult__form');
var consultSubmit = document.querySelector('.consult__callback');
var consultTitle = document.querySelector('.consult__title');
var consultDescription = document.querySelector('.consult__description');
var consultAfterSending = document.querySelector('.consult__reaction');

if (consultSubmit) {
    consultSubmit.addEventListener('click', function() {
        event.preventDefault();
        consultForm.classList.add('formSent');
        consultTitle.innerHTML = "Заявка успешно отправлена";
        consultDescription.innerHTML = "В скором времени мы свяжемся с Вами";
        consultAfterSending.classList.add('active');
    });
};

var fastOrderInfoOpener = document.querySelector('.fast-order__information-title');
var fastOrderInfo = document.querySelector('.fast-order__information-wrap');
var fastOrderInfoCloser = document.querySelector('.fast-order__information-close');

if (fastOrderInfoOpener) {
    fastOrderInfoOpener.addEventListener('click', function() {
        event.preventDefault();
        fastOrderInfo.classList.add('active');
    });
};

if (fastOrderInfoCloser) {
    fastOrderInfoCloser.addEventListener('click', function() {
        event.preventDefault();
        fastOrderInfo.classList.remove('active');
    });
};
