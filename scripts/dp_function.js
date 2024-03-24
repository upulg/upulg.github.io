
$(document).ready(function(){

    // faq accordion
    $('.dp-head').each(function(){
        $(this).click(function(){
            $(this).next().toggleClass('show-dp-content');
            let icon = $(this).children('span').children("i").attr('class');

            if(icon == "fas fa-plus"){
                $(this).children('span').html('<i class = "fas fa-minus"></i>');
            } else {
                $(this).children('span').html('<i class = "fas fa-plus"></i>');
            }
        });
    });

});