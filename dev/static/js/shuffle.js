var ctaTitles = [
  "Ещё сомневаешься?",
  "Не нашел нужную вакансию?",
  "Не хватает опыта?",
  "Живешь в другом городе?",
  "Остались вопросы?",
  "Хочешь увидеть офис и будущих коллег?",
  "Хочешь пообщаться?",
  "Хочешь узнать больше?",
  "Не из IT, но хочешь в команду?"
];

var ctaLinksClasses = [
    "secondLine",
    "thirdLine",
    "fourthLine"
];

function reloadText() {
    var ctaTitleWrap = document.querySelector('.cta__title');
    var ctaDescriptionsWrap = document.querySelector('.cta__description');
    var ctaLinksWrap = document.querySelector('.cta__link');
    var ctaBlock = document.querySelector('.cta__button');
    var ctaWrapper = document.querySelector('.cta__wrapper');
    var ctaTitleItem = ctaTitles[Math.floor(Math.random()*ctaTitles.length)];
    var ctaLinksDecoration = ctaLinksClasses[Math.floor(Math.random()*ctaLinksClasses.length)];

    ctaTitleWrap.innerHTML = ctaTitleItem;

    setTimeout(reloadText, 7000);
    ctaWrapper.classList.add('loaded');

    setTimeout(function() {
        return ctaWrapper.classList.remove('loaded');
    }, 6444);

    let elements = document.querySelectorAll('.cta__title');

    elements.forEach(element => {
        let innerText = element.innerText;
        element.innerHTML = '';

        let textContainer = document.createElement('div');
        textContainer.classList.add('block');

        for (let letter of innerText) {
            let span = document.createElement('span');
            span.innerText = letter.trim() === '' ? '\xa0' : letter;
            span.classList.add('letter');
            textContainer.appendChild(span);
        }

        element.appendChild(textContainer);
        //element.appendChild(textContainer.cloneNode(true));
    });

    setTimeout(() => {
        elements.forEach(element => {
            element.classList.add('play');
        })
    }, 6444);

    setTimeout(() => {
        elements.forEach(element => {
            element.classList.remove('play');
        })
    }, 600);

    if (ctaTitleItem === 'Ещё сомневаешься?') {
        ctaBlock.setAttribute('data-type', ctaLinksDecoration);
        ctaDescriptionsWrap.innerHTML = 'Просто '
        ctaLinksWrap.innerHTML = 'напиши!';
    }

    if (ctaTitleItem === 'Не нашел нужную вакансию?') {
        ctaBlock.setAttribute('data-type', ctaLinksDecoration);
        ctaDescriptionsWrap.innerHTML = 'Все равно '
        ctaLinksWrap.innerHTML = 'пиши!';
    }

    if (ctaTitleItem === 'Не хватает опыта?') {
        ctaBlock.setAttribute('data-type', ctaLinksDecoration);
        ctaDescriptionsWrap.innerHTML = 'Все равно '
        ctaLinksWrap.innerHTML = 'пиши!';
    }

    if (ctaTitleItem === 'Живешь в другом городе?') {
        ctaBlock.setAttribute('data-type', ctaLinksDecoration);
        ctaDescriptionsWrap.innerHTML = 'Все равно '
        ctaLinksWrap.innerHTML = 'напиши!';
    }

    if (ctaTitleItem === 'Остались вопросы?') {
        ctaBlock.setAttribute('data-type', 'firstLine');
        ctaDescriptionsWrap.innerHTML = ''
        ctaLinksWrap.innerHTML = 'Напиши нам!';
    }

    if (ctaTitleItem === 'Хочешь увидеть офис и будущих коллег?') {
        ctaBlock.setAttribute('data-type', ctaLinksDecoration);
        ctaDescriptionsWrap.innerHTML = 'Действуй - '
        ctaLinksWrap.innerHTML = 'пиши!';
    }

    if (ctaTitleItem === 'Хочешь пообщаться?') {
        ctaBlock.setAttribute('data-type', 'firstLine');
        ctaDescriptionsWrap.innerHTML = 'Просто '
        ctaLinksWrap.innerHTML = 'напиши нам!';
    }

    if (ctaTitleItem === 'Хочешь узнать больше?') {
        ctaBlock.setAttribute('data-type', ctaLinksDecoration);
        ctaDescriptionsWrap.innerHTML = 'Скорее '
        ctaLinksWrap.innerHTML = 'пиши!';
    }

    if (ctaTitleItem === 'Не из IT, но хочешь в команду?') {
        ctaBlock.setAttribute('data-type', 'firstLine');
        ctaDescriptionsWrap.innerHTML = ''
        ctaLinksWrap.innerHTML = 'Напиши нам!';
    }

    let descriptions = document.querySelectorAll('.cta__description');

    descriptions.forEach(element => {
        let innerText2 = element.innerText;
        element.innerHTML = '';

        let textContainer2 = document.createElement('div');
        textContainer2.classList.add('block');

        for (let letter of innerText2) {
            let span2 = document.createElement('span');
            span2.innerText = letter.trim() === '' ? '\xa0' : letter;
            span2.classList.add('letter2');
            textContainer2.appendChild(span2);
        }

        element.appendChild(textContainer2);
        //element.appendChild(textContainer.cloneNode(true));
    });

    setTimeout(() => {
        descriptions.forEach(element => {
            element.classList.add('play');
        })
    }, 6444);

    setTimeout(() => {
        descriptions.forEach(element => {
            element.classList.remove('play');
        })
    }, 600);
}

reloadText();
