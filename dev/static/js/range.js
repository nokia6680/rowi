var $range = $(".filter-dropdown__slider"),
    $inputFrom = $(".js-input-from"),
    $inputTo = $(".js-input-to"),
    instance,
    min = 90,
    max = 560,
    from = 0,
    to = 0;

$range.ionRangeSlider({
	skin: "round",
    type: "double",
    min: min,
    max: max,
    from: 90,
    to: 560,
    onStart: updateInputs,
    onChange: updateInputs
});
instance = $range.data("ionRangeSlider");

function updateInputs (data) {
	from = data.from;
    to = data.to;

    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
}

$inputFrom.on("input", function () {
    var val = $(this).prop("value");

    // validate
    if (val < min) {
        val = min;
    } else if (val > to) {
        val = to;
    }

    instance.update({
        from: val
    });
});

$inputTo.on("input", function () {
    var val = $(this).prop("value");

    // validate
    if (val < from) {
        val = from;
    } else if (val > max) {
        val = max;
    }

    instance.update({
        to: val
    });
});

var $cell = $('.filter');
var $body = $('.body');
var $shop = $('.shop__content');

//open and close card when clicked on card
$cell.find('.filter-head').click(function() {

    var $thisCell = $(this).closest('.filter');

    if ($thisCell.hasClass('is-collapsed')) {
        $cell.not($thisCell).removeClass('is-expanded').addClass('is-collapsed').addClass('is-inactive');
        $thisCell.removeClass('is-collapsed').addClass('is-expanded').removeClass('is-inactive');
        $body.addClass('dimmed');
        $body.addClass('dim-no-scroll');
        $shop.addClass('over');

        if ($cell.not($thisCell).hasClass('is-inactive')) {
            //do nothing
        } else {
            $cell.not($thisCell).addClass('is-inactive');
        }

    } else {
        $thisCell.removeClass('is-expanded').addClass('is-collapsed');
        $cell.not($thisCell).removeClass('is-inactive');
        $body.removeClass('dimmed');
        $body.removeClass('dim-no-scroll');
        $shop.removeClass('over');
    }
});

var $subCell = $('.subfilter-item');

//open and close card when clicked on card
$subCell.find('.filter-dropdown__name').click(function() {

    var $thisSubCell = $(this).closest('.subfilter-item');

    if ($thisSubCell.hasClass('is-collapsed')) {
        $subCell.not($thisSubCell).removeClass('is-expanded').addClass('is-collapsed').addClass('is-inactive');
        $thisSubCell.removeClass('is-collapsed').addClass('is-expanded').removeClass('is-inactive');

        if ($subCell.not($thisSubCell).hasClass('is-inactive')) {
            //do nothing
        } else {
            $subCell.not($thisSubCell).addClass('is-inactive');
        }

    } else {
        $thisSubCell.removeClass('is-expanded').addClass('is-collapsed');
        $subCell.not($thisSubCell).removeClass('is-inactive');
    }
});
