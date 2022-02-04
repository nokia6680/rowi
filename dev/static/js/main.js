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
var header = document.querySelector('.header');
var menuOpener = document.querySelector('.header__toggle');
var menu = document.querySelector('.nav');
var controls = document.querySelector('.header__controls');

if (menuOpener) {
     menuOpener.addEventListener('click', function() {
        event.preventDefault();
        menuOpener.classList.toggle('opened');
        menu.classList.toggle('opened');
        controls.classList.toggle('opened');
        header.classList.toggle('opened');
     });
};

function changeText() {
    var x = document.getElementById("toggleText");
    if (x.innerHTML === "Навигация") {
        x.innerHTML = "Закрыть";
    } else {
        x.innerHTML = "Навигация";
    }
};

var jobs = document.getElementsByClassName('job__name');
var elNodes = document.querySelectorAll(".job__name");

for (var i = 0; i < jobs.length; i++) {
    var elem = jobs[i];
    elem.addEventListener("click", function() {
        event.preventDefault();
        this.classList.toggle("active");
    });
}

$('.js-popup-opener').on('click', function() {
    const popupId = $(this).attr('data-modal');
    $(popupId).toggleClass('active');
});

$('.js-popup-wrap').on('click', function(event) {
    if (!$(event.target).closest('.js-popup-inner').length) {
        $(this).removeClass('active');
    }
});
//
// $('.nav__controls-item--cart').on('click', function() {
//     $('.nav-cart').toggleClass('cartOpened');
// });
//
// $('.body').on('click', function(event) {
//     if (!$(event.target).closest('.nav-cart').length && !$(event.target).closest('.nav__controls').length) {
//         $('.nav-cart').removeClass('cartOpened');
//     };
// });
//
// var btns = document.getElementsByClassName('s-content__days-btn');
// var elNodes = document.querySelectorAll(".s-content__days-btn");
// var daysFilter = document.querySelector('.s-content__filter-list');
//
// for (var i = 0; i < btns.length; i++) {
//     var elem = btns[i];
//
//     elem.addEventListener("click", changeActiveClass);
// }
//
// function changeActiveClass(e) {
//     event.preventDefault();
//
//     for (var i = 0; i < btns.length; i++) {
//         var elem = btns[i];
//         elem.classList.remove('active');
//         var daysData = this.getAttribute("data-value");
//         daysFilter.setAttribute("data-days", daysData);
//     }
//
//     e.target.classList.add('active');
// }

// var consultForm = document.querySelector('.consult__form');
// var consultSubmit = document.querySelector('.consult__callback');
// var consultTitle = document.querySelector('.consult__title');
// var consultDescription = document.querySelector('.consult__description');
// var consultAfterSending = document.querySelector('.consult__reaction');
//
// if (consultSubmit) {
//     consultSubmit.addEventListener('click', function() {
//         event.preventDefault();
//         consultForm.classList.add('formSent');
//         consultTitle.innerHTML = "Заявка успешно отправлена";
//         consultDescription.innerHTML = "В скором времени мы свяжемся с Вами";
//         consultAfterSending.classList.add('active');
//     });
// };
