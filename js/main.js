$(document).ready(function(){

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active")
       
        let active = $('.navbar .menu').hasClass('active');
        active ?  $('.lottie').hide() : $('.lottie').show()
    })

    
    
})