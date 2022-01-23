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

var ctaDescriptions = [
    "Действуй – ",
    "Все–равно",
    ""
];

var ctaLinks = [
    "пиши!",
    "пиши нам!"
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

    var ctaTitleItem = ctaTitles[Math.floor(Math.random()*ctaTitles.length)];
    var ctaDescriptionsItem = ctaDescriptions[Math.floor(Math.random()*ctaDescriptions.length)];
    var ctaLinksItem = ctaLinks[Math.floor(Math.random()*ctaLinks.length)]

    var ctaLinksDecoration = ctaLinksClasses[Math.floor(Math.random()*ctaLinksClasses.length)];

    ctaTitleWrap.innerHTML = ctaTitleItem;
    ctaDescriptionsWrap.innerHTML = ctaDescriptionsItem;
    ctaLinksWrap.innerHTML = ctaLinksItem;

    setTimeout(reloadText, 3000);

    console.log(ctaLinksItem);

    if (ctaLinksItem === 'пиши нам!') {
        ctaBlock.setAttribute('data-type', 'firstLine');
    }

    else {
        ctaBlock.setAttribute('data-type', ctaLinksDecoration);
    }
}

reloadText();
