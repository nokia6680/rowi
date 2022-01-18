const swiper1 = new Swiper('.swiper-container-reviews', {
    slidesPerView: 1,
    spaceBetween: 0,
    grabCursor: true,
    speed: 1000,

    navigation: {
        nextEl: '.reviews__next',
        prevEl: '.reviews__prev',
    },

    breakpoints: {
        375: {
            spaceBetween: 0,
            slidesPerView: 1,
            speed: 1000,
            effect: "creative",
            touchRatio: 0.2,
            slideToClickedSlide: true,
            creativeEffect: {
                prev: {
                    translate: ["-120%", 0, -500],
                },
                next: {
                    translate: ["120%", 0, -500],
                },
            },

            navigation: {
                nextEl: '.reviews__next',
                prevEl: '.reviews__prev',
            },
        },

        768: {
            spaceBetween: 0,
            slidesPerView: 2.4,
            speed: 1000,
            effect: "creative",
            touchRatio: 0.2,
            slideToClickedSlide: true,
            creativeEffect: {
                prev: {
                    translate: ["-120%", 0, -500],
                },
                next: {
                    translate: ["120%", 0, -500],
                },
            },

            navigation: {
                nextEl: '.reviews__next',
                prevEl: '.reviews__prev',
            },
        },

        1366: {
            spaceBetween: 60,
            slidesPerView: 3.4,
            speed: 1000,
            effect: "creative",
            touchRatio: 0.2,
            slideToClickedSlide: true,
            creativeEffect: {
                prev: {
                    translate: ["-120%", 0, -500],
                },
                next: {
                    translate: ["120%", 0, -500],
                },
            },

            navigation: {
                nextEl: '.reviews__next',
                prevEl: '.reviews__prev',
            },
        },

        1680: {
            spaceBetween: 145,
            slidesPerView: 4,
            speed: 1000,
            effect: "creative",
            touchRatio: 0.2,
            slideToClickedSlide: true,
            creativeEffect: {
                prev: {
                    translate: ["-120%", 0, -500],
                },
                next: {
                    translate: ["120%", 0, -500],
                },
            },

            navigation: {
                nextEl: '.reviews__next',
                prevEl: '.reviews__prev',
            },
        },
    }
});

const swiper2 = new Swiper('.s-content-filter-swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    grabCursor: true,
    speed: 1000,
    navigation: {
        nextEl: '.s-content__filter-next',
        prevEl: '.s-content__filter-prev',
    },

    breakpoints: {
        375: {
            slideToClickedSlide: true,
            slidesPerView: 1,
            speed: 1000,
            centeredSlides: true,
            navigation: {
                nextEl: '.s-content__filter-next',
                prevEl: '.s-content__filter-prev',
            },
        },

        1366: {
            spaceBetween: 30,
            slidesPerView: 4,
            speed: 1000,
            centeredSlides: false,
            navigation: {
                nextEl: '.s-content__filter-next',
                prevEl: '.s-content__filter-prev',
            },
        },

        1680: {
            spaceBetween: 27,
            slidesPerView: 5,
            speed: 1000,
            centeredSlides: false,
            navigation: {
                nextEl: '.s-content__filter-next',
                prevEl: '.s-content__filter-prev',
            },
        },
    }
});

var swiperBtns = document.getElementsByClassName('s-content__filter-btn');
var elNodes = document.querySelectorAll(".s-content__filter-btn");

for (var i = 0; i < swiperBtns.length; i++) {
    var elem = swiperBtns[i];

    elem.addEventListener("click", changeActiveClass);
}

function changeActiveClass(e) {
    event.preventDefault();

    for (var i = 0; i < swiperBtns.length; i++) {
        var elem = swiperBtns[i];
        elem.classList.remove('active');
    }

    e.target.classList.add('active');
}

const swiper8 = new Swiper('.s-content-cabinet-swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    grabCursor: true,
    speed: 1000,
    navigation: {
        nextEl: '.s-content__filter-next',
        prevEl: '.s-content__filter-prev',
    },

    breakpoints: {
        375: {
            slideToClickedSlide: true,
            slidesPerView: 1,
            speed: 1000,
            centeredSlides: true,
            navigation: {
                nextEl: '.s-content__filter-next',
                prevEl: '.s-content__filter-prev',
            },
        },

        768: {
            spaceBetween: 14.6666,
            slidesPerView: 4,
            speed: 1000,
            centeredSlides: false,
            navigation: {
                nextEl: '.s-content__filter-next',
                prevEl: '.s-content__filter-prev',
            },
        },

        1366: {
            spaceBetween: 30,
            slidesPerView: 5,
            speed: 1000,
            centeredSlides: false,
            navigation: {
                nextEl: '.s-content__filter-next',
                prevEl: '.s-content__filter-prev',
            },
        },

        1680: {
            spaceBetween: 27,
            slidesPerView: 5,
            speed: 1000,
            centeredSlides: false,
            navigation: {
                nextEl: '.s-content__filter-next',
                prevEl: '.s-content__filter-prev',
            },
        },
    }
});

// breakpoint where swiper will be destroyed
// and switches to a dual-column layout
const breakpoint = window.matchMedia( '(min-width: 1366px)' );
// keep track of swiper instances to destroy later
let mySwiper;
const breakpointChecker = function() {
   // if larger viewport and multi-row layout needed
   if ( breakpoint.matches === true ) {
      // clean up old instances and inline styles when available
      if ( mySwiper !== undefined ) mySwiper.destroy( true, true );
      // or/and do nothing
      return;
   // else if a small viewport and single column layout needed
   } else if ( breakpoint.matches === false ) {
      // fire small viewport version of swiper
      return enableSwiper();
   }
};

const enableSwiper = function() {
    mySwiper = new Swiper ('.meals-swiper-container', {
        loop: false,
        slidesPerView: 1,
        spaceBetween: 40,
        centeredSlides: true,
        initialSlide: 0,
        a11y: true,
        keyboardControl: true,
        grabCursor: true,

        navigation: {
            nextEl: '.meals__next',
            prevEl: '.meals__prev',
        },

        breakpoints: {
            375: {
                loop: false,
                slidesPerView: 1,
                spaceBetween: 40,
                centeredSlides: true,
                initialSlide: 0,
                a11y: true,
                keyboardControl: true,
                grabCursor: true,

                navigation: {
                    nextEl: '.meals__next',
                    prevEl: '.meals__prev',
                },
            },

            768: {
                loop: false,
                slidesPerView: 2,
                spaceBetween: 20,
                centeredSlides: false,
                initialSlide: 0,
                a11y: true,
                keyboardControl: true,
                grabCursor: true,

                navigation: {
                    nextEl: '.meals__next',
                    prevEl: '.meals__prev',
                },
            }
        }
    });
};

// keep an eye on viewport size changes
breakpoint.addListener(breakpointChecker);
// kickstart
breakpointChecker();

const swiper3 = new Swiper('.shop__filter-list', {
    slidesPerView: 'auto',
    variableWidth: true,
    spaceBetween: 0,
    grabCursor: true,
    speed: 1000,
    focusableElements: 'label',
});

const swiper4 = new Swiper('.change-meal__filter-list', {
    slidesPerView: 'auto',
    variableWidth: true,
    spaceBetween: 0,
    grabCursor: true,
    speed: 1000,
    focusableElements: 'label',
});

const swiper5 = new Swiper('.swiper-container-similar', {
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    speed: 1000,

    navigation: {
        nextEl: '.similar__next',
        prevEl: '.similar__prev',
    },

    breakpoints: {
        375: {
            spaceBetween: 20,
            slidesPerView: 1,
            speed: 1000,
            effect: "creative",
            touchRatio: 0.2,
            slideToClickedSlide: true,
            creativeEffect: {
                prev: {
                    translate: ["-120%", 0, -500],
                },
                next: {
                    translate: ["120%", 0, -500],
                },
            },

            navigation: {
                nextEl: '.similar__next',
                prevEl: '.similar__prev',
            },
        },

        768: {
            spaceBetween: 128,
            slidesPerView: 2,
            speed: 1000,
            effect: "creative",
            touchRatio: 0.2,
            slideToClickedSlide: true,
            creativeEffect: {
                prev: {
                    translate: ["-120%", 0, -500],
                },
                next: {
                    translate: ["120%", 0, -500],
                },
            },

            navigation: {
                nextEl: '.similar__next',
                prevEl: '.similar__prev',
            },
        },

        1366: {
            spaceBetween: 55.33333333333333,
            slidesPerView: 4,
            speed: 1000,
            effect: "creative",
            touchRatio: 0.2,
            slideToClickedSlide: true,
            creativeEffect: {
                prev: {
                    translate: ["-120%", 0, -500],
                },
                next: {
                    translate: ["120%", 0, -500],
                },
            },

            navigation: {
                nextEl: '.similar__next',
                prevEl: '.similar__prev',
            },
        },

        1680: {
            spaceBetween: 106,
            slidesPerView: 4,
            speed: 1000,
            effect: "creative",
            touchRatio: 0.2,
            slideToClickedSlide: true,
            creativeEffect: {
                prev: {
                    translate: ["-120%", 0, -500],
                },
                next: {
                    translate: ["120%", 0, -500],
                },
            },

            navigation: {
                nextEl: '.similar__next',
                prevEl: '.similar__prev',
            },
        },
    }
});
