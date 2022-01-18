var orderItem = document.getElementsByClassName('order__line');
var elNodes = document.querySelectorAll(".order__line");
var ordersBody = document.querySelector('.order');
var ordersContent = document.querySelector('.order__body');
//
for (var i = 0; i < orderItem.length; i++) {
    var order = orderItem[i];
    order.addEventListener("click", function() {
        event.preventDefault();
        this.classList.toggle("active");
        ordersBody.classList.toggle("no-flow");
    });
}
