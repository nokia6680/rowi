// Как только будет загружен API и готов DOM, выполняем инициализацию
ymaps.ready(init);

var serviceMaps = [];
var serviceCoors = [
    [50, 40],
    [50, 50]
];
var serviceQuantity = $('[data-latitude][data-longitude]').length;

// Инициализация и уничтожение карты при нажатии на кнопку.
function init() {
    $('.js-map').bind({
        click: function() {
            for (var q = 0; q < serviceQuantity; q++) {
                var ind = q + 1;
                var mapId = 'map' + ind;

                if (!serviceMaps[q]) {
                    serviceMaps[q] = new ymaps.Map(mapId, {
                        center: serviceCoors[q],
                        zoom: 9,
                        controls: ['zoomControl', 'fullscreenControl']
                    });
                } else {
                    serviceMaps[q].destroy(); // Деструктор карты
                    serviceMaps[q] = null;
                }
            }
        }
    });
}
