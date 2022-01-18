// Табы для фильтра еды
function openMeal(evt, mealName) {
    // Declare all variables
    var i, tabcontent, tablinks;
    var filterList = document.querySelector('.s-filter__list');

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("s-content__item");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("s-filter__item");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" selected", "");
    }

    var breakpoint = window.matchMedia('(min-width: 768px)');
    var breakpointChecker = function() {
        // if larger viewport
        if (breakpoint.matches === true) {
            document.getElementById(mealName).style.display = "grid";
            evt.currentTarget.className += " selected";
            // else if a small viewport
        } else {
            // fire small viewport
            document.getElementById(mealName).style.display = "flex";
            evt.currentTarget.className += " selected";
        }
    };

    // keep an eye on viewport size changes
    breakpoint.addListener(breakpointChecker);
    // kickstart
    breakpointChecker();
}
// Show the current tab, and add an "active" class to the button that opened the tab
//document.getElementById(mealName).style.display = "grid";
//evt.currentTarget.className += " selected";

document.getElementById("defaultMealOpen").click();
filterList.classList.remove('active');
