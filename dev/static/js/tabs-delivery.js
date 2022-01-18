// Табы для фильтра еды
function openZone(evt, openDel) {
    // Declare all variables
    var i, tabcontent, tablinks;
    var zoneList = document.querySelector('.delivery__list');

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("delivery__details-item");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("delivery__item");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" selected", "");
    }

    document.getElementById(openDel).style.display = "flex";
    evt.currentTarget.className += " selected";
}

document.getElementById("defaultZone").click();
zoneList.classList.remove('active');
