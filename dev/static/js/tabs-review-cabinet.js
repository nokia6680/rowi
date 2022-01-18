
// Табы для фильтра еды
function changeTabCab(evt, cabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
    var filterList = document.querySelector('.edit__filter-list');

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("edit__form-list");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("edit__filter-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    var breakpoint = window.matchMedia('(min-width: 768px)');
    var breakpointChecker = function() {
        // if larger viewport
        if (breakpoint.matches === true) {
            document.getElementById(cabName).style.display = "grid";
            evt.currentTarget.className += " active";
            // else if a small viewport
        } else {
            // fire small viewport
            document.getElementById(cabName).style.display = "flex";
            evt.currentTarget.className += " active";
        }
    };

    // keep an eye on viewport size changes
    breakpoint.addListener(breakpointChecker);
    // kickstart
    breakpointChecker();
}

document.getElementById("defaultEditTab").click();
