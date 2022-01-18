$('.tab-title').on('click', function() {
    const index = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    $(this).parents('.tabs-container').find('.tab-content').removeClass('active');
    $(this).parents('.tabs-container').find('.tab-content').eq(index).addClass('active');
});
