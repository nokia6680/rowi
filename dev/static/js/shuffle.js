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
    //console.log(ctaLinksItem);

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
}

reloadText();
