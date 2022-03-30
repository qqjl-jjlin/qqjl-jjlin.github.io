$(function(){
    $('#dowebok').fullpage({
        'navigation':true,
        'navigationPosition':"left",
        'navigationColor':['#fff'],
    });
    $(window).click(function () {
        $('audio')[0].play();
    });
});
