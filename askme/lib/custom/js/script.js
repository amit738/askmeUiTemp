(function () {
    $('.carousel').carousel({
    interval: false
}); 
    $('.viewGalleryBtn').click(function(){
        $(this).parents('.flip').find('.card').addClass('flipped');

    });
	 $('.carouselRemove').click(function(){
        $(this).parents('.flip').find('.card').removeClass('flipped');

    });
	/*Add to cart animation*/
	$('.addCartBtn').on('click', function () {
        var cart = $('.myCart');
        var imgtodrag = $(this).closest('.front').find("img").eq(0);
        if (imgtodrag) {
            var imgclone = imgtodrag.clone()
                .offset({
                top: imgtodrag.offset().top,
                left: imgtodrag.offset().left
            })
                .css({
                'opacity': '0.5',
                    'position': 'absolute',
                    'height': '150px',
                    'width': '150px',
                    'z-index': '99900'
            })
                .appendTo($('body'))
                .animate({
                'top': cart.offset().top + -75,
                    'left': cart.offset().left + 0,
                    'width': 75,
                    'height': 75
            }, 1000, 'easeInOutExpo');
            
            /*setTimeout(function () {
                cart.effect("shake", {
                    times: 2
                }, 200);
            }, 1500);*/

            imgclone.animate({
                'top': cart.offset().top + 0,
                'left': cart.offset().left + 20,
                'width': 0,
                'height': 0
            }, function () {
                $(this).detach()
            });
        }
    });
})();