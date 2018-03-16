$( document ).ready( function() {
console.log("DOM is ready!")

    // $('.bigSlider').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     fade: true,
    //     asNavFor: '.slider'
    // });
    $('.slider').slick( {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
        // asNavFor: '.bigSlider',
        // dots: true,
        // centerMode: true,
        // focusOnSelect: true
    });  
    $('.campSlider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
        
    });
    
});
