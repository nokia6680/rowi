// Расчеты для переползания текста

function animateScroll(coords, offset) {
    var stackBlock = document.getElementById("stack");
    var stackTop = stackBlock.offsetTop;
    var freedomBlock = document.getElementById("freedom");
    var freedomTop = freedomBlock.offsetTop;
    var howBlock = document.getElementById("how");
    var howTop = howBlock.offsetTop;
    var beneBlock = document.getElementById("benefits");
    var beneTop = beneBlock.offsetTop;
    var aboutBlock = document.getElementById("about");
    var aboutTop = aboutBlock.offsetTop;

    var scrollHeight = window.pageYOffset;

    var collision = stackTop - scrollHeight;
    var collision2 = freedomTop - scrollHeight;
    var collision3 = howTop - scrollHeight;
    var collision4 = beneTop - scrollHeight;
    var collision5 = aboutTop - scrollHeight;

    if (window.innerWidth >= 375) {
        //console.log(freedomBlock.getBoundingClientRect(), collision2, freedomTop);

        if (collision < 600) {
            stackBlock.classList.add('loaded');
        }

        if (collision2 < 500) {
            freedomBlock.classList.add('loaded');
        }

        if (collision3 < 600) {
            howBlock.classList.add('loaded');
        }

        if (collision4 < 600) {
            beneBlock.classList.add('loaded');
        }

        if (collision5 < 600) {
            aboutBlock.classList.add('loaded');
        }

    } else {
        return;
    }
}

window.addEventListener('scroll', function() {
    var windowHeight = window.innerHeight;
    animateScroll(windowHeight);
});
