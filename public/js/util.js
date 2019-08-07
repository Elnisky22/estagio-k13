$(document).ready(function(){
    $('.ofertas').slick({
        slidsToShow     : 4,
        slidesToScroll  : 4,
        infinite        : false,
        responsive      : [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow    : 3,
                slidesToScroll  : 3
            }
        },
        {
            breakpoint: 997,
            settings: {
                slidesToShow    : 2,
                slidesToScroll  : 2
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow    : 1,
                slidesToScroll  : 1
            }
        }
        ]
    });
});