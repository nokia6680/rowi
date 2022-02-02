// Расчеты для переползания текста

function animateScroll(coords, offset) {
    var stackBlock = document.getElementById("stack");
    var stackTop = stackBlock.offsetTop;
    var freedomBlock = document.getElementById("freedom");
    var freedomTop = freedomBlock.offsetTop;

    var scrollHeight = window.pageYOffset;

    var collision = stackTop - scrollHeight;
    var collision2 = freedomTop - scrollHeight;

    if (window.innerWidth >= 1440) {
        //console.log(freedomBlock.getBoundingClientRect(), collision2, freedomTop);

        if (collision < 600) {
            stackBlock.classList.add('loaded');
        }

        if (collision2 < 500) {
            freedomBlock.classList.add('loaded');
            freedomBlock.scroll({top: 0});
            console.log('gowno');
        }

    } else {
        return;
    }
}

window.addEventListener('scroll', function() {
    var windowHeight = window.innerHeight;
    animateScroll(windowHeight);
});
