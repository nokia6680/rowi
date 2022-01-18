function validationMail() {
    let mailInput = document.querySelector('.cart-form__input--mail');
    let email = document.getElementById('cart-mail').value;
    let text = document.querySelector('.cart-form__error--mail');
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{1,3}$/;

    if (email.match(pattern)) {
        text.innerHTML = "";
        mailInput.classList.add('valid-mail');
        mailInput.classList.remove('invalid-mail');
    } else {
        text.innerHTML = "Поле email заполнено не верно. Оно должно содержать латинские буквы и @";
        mailInput.classList.add('invalid-mail');
    }

    if (email == '') {
        text.innerHTML = "";
        mailInput.classList.remove('invalid-mail');
        mailInput.classList.remove('valid-mail');
    }
}
