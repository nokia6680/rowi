var resultItem = document.getElementsByClassName('result__line');
var elNodes = document.querySelectorAll(".result__line");
var resultBody = document.querySelector('.result');
//
for (var i = 0; i < resultItem.length; i++) {
    var result = resultItem[i];
    result.addEventListener("click", function() {
        event.preventDefault();
        this.classList.toggle("active");
        resultBody.classList.toggle("no-flow");
    });
}
