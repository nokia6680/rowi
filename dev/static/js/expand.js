var expanderBtn = document.querySelector('.serts__rules-expand');
var expandedMenu = document.querySelector('.serts__rules-list');

if (expanderBtn) {
    expanderBtn.addEventListener('click', function() {
        event.preventDefault();
        expandedMenu.classList.toggle('active');
        expanderBtn.innerHTML = expanderBtn.innerHTML == "Развернуть" ? "Свернуть" : "Развернуть";
    });
};
