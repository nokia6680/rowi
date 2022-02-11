// // breakpoint where swiper will be destroyed
// // and switches to a dual-column layout
// const breakpoint = window.matchMedia( '(min-width: 1366px)' );
// // keep track of swiper instances to destroy later
// let mySwiper;
// const breakpointChecker = function() {
//    // if larger viewport and multi-row layout needed
//    if ( breakpoint.matches === true ) {
//       // clean up old instances and inline styles when available
//       if ( mySwiper !== undefined ) mySwiper.destroy( true, true );
//       // or/and do nothing
//       return;
//    // else if a small viewport and single column layout needed
//    } else if ( breakpoint.matches === false ) {
//       // fire small viewport version of swiper
//       return enableSwiper();
//    }
// };
//
// const enableSwiper = function() {
//     mySwiper = new Swiper ('.meals-swiper-container', {
//         loop: false,
//         slidesPerView: 1,
//         spaceBetween: 40,
//         centeredSlides: true,
//         initialSlide: 0,
//         a11y: true,
//         keyboardControl: true,
//         grabCursor: true,
//
//         navigation: {
//             nextEl: '.meals__next',
//             prevEl: '.meals__prev',
//         },
//
//         breakpoints: {
//             375: {
//                 loop: false,
//                 slidesPerView: 1,
//                 spaceBetween: 40,
//                 centeredSlides: true,
//                 initialSlide: 0,
//                 a11y: true,
//                 keyboardControl: true,
//                 grabCursor: true,
//
//                 navigation: {
//                     nextEl: '.meals__next',
//                     prevEl: '.meals__prev',
//                 },
//             },
//
//             768: {
//                 loop: false,
//                 slidesPerView: 2,
//                 spaceBetween: 20,
//                 centeredSlides: false,
//                 initialSlide: 0,
//                 a11y: true,
//                 keyboardControl: true,
//                 grabCursor: true,
//
//                 navigation: {
//                     nextEl: '.meals__next',
//                     prevEl: '.meals__prev',
//                 },
//             }
//         }
//     });
// };
//
// // keep an eye on viewport size changes
// breakpoint.addListener(breakpointChecker);
// // kickstart
// breakpointChecker();

const swiper = new Swiper('.swiper-benefits-container', {
    slidesPerView: '1',
    variableWidth: true,
    spaceBetween: 0,
    speed: 1000,

    preventInteractionOnTransition: true,
    mousewheel: {
        eventsTarget: '.benefits',
        releaseOnEdges: true,
        thresholdDelta: 1,
        sensitivity: 0,
    },

    effect: "creative",
    creativeEffect: {
        prev: {
            opacity: '0',
            shadow: false,
            translate: [0, 0, -1],
        },
        next: {
            opacity: '0',
            translate: [0, 0, 0],
        },
    }
});

swiper.on('beforeInit', function () {
    var currEl = document.querySelector('.swiper-slide-active');
    var dataCurr = currEl.getAttribute("data-value");
    var sliderNav = document.querySelector('.benefits__list');

    sliderNav.setAttribute("data-value", dataCurr);
});

swiper.on('slideChangeTransitionStart', function () {
    var currEl = document.querySelector('.swiper-slide-active');
    var dataCurr = currEl.getAttribute("data-value");
    var sliderNav = document.querySelector('.benefits__list');

    sliderNav.setAttribute("data-value", dataCurr);
});

// swiper.on('slideChangeTransitionEnd', function () {
//     var currEl = document.querySelector('.swiper-slide-active');
//     var dataCurr = currEl.getAttribute("data-value");
//     var sliderNav = document.querySelector('.benefits__list');
//
//     sliderNav.setAttribute("data-value", dataCurr);
// });

var touch = {};

window.onload = function () {
    "use strict";
    document.body.addEventListener("wheel", touchHandler);
    document.body.addEventListener("wheel", touchHandler);
};

function touchHandler(e) {
    "use strict";

    var el = e.target;

    if (el.parentNode.id === "animation") {
        if (e.type === "touchstart") {
            touch.startX = e.changedTouches[0].screenX;
            touch.startY = e.changedTouches[0].screenY;
        } else {
            touch.endX = e.changedTouches[0].screenX;
            touch.endY = e.changedTouches[0].screenY;

            touch.lenX = Math.abs(touch.endX - touch.startX);
            touch.lenY = Math.abs(touch.endY - touch.startY);

            if (touch.lenY < 20) {
                // disable scroll
                document.body.style.overflowY = "hidden";

                // do swipe related stuff
                swipe(el.parentNode);
            } else {
                // enable scroll if swipe was not intended
                document.body.style.overflowY = "scroll";
            }
        }
    } else {
        // keep scroll enabled if touch is outside the image slider
        document.body.style.overflowY = "scroll";
    }
}
