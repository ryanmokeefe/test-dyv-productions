// // Popout Video:

var w = $(window).width();
var h = $(window).height();
var popout = document.getElementById('popout');
var divW = $(popout).width();
var divH = $(popout).height();

popout.style.position="fixed";
popout.style.top = (h/2)-(divH/2)+"px";
popout.style.left = (w/2)-(divW/2)+"px";

var videos = $("video");

var popoutVid = $(popout).find("video");
var oldSource = $(popoutVid).find("source");


videos.click(function() {
    var sources = $(this).find( "source" );
    $(sources).clone().appendTo(popoutVid);
    var video = $(popoutVid).get(0);
    video.load();
    popout.style.display = "flex";
    video.play();
});


// Exit when clicked or esc is pressed

var exit = $(".exit-popout");

$(document).keydown(function(e) {
    if (e.keyCode == 27) {
        clearPopout();
    }
});

exit.click(function() {
    clearPopout();
});

var clearPopout = () => {
    var video = $(popoutVid).get(0);
    video.pause();
    oldSource = $(popoutVid).find("source");
    $(oldSource).remove();

    popout.style.display = "none";
};

// Fix Film Reel to top on scroll:

var reel = $("#filmReel");
var reelPos = reel.offset();
$(window).resize(function() {
    reelPos = reel.offset();

});


// make responsive (bool if window is X size / or if filmReel starts at fixed-class?)
$(window).scroll(function() {
    if ($(window).scrollTop() >= (reelPos.top - 140))
    {
        reel.addClass("fixedReel");
    } else 
    {
        reel.removeClass("fixedReel");
    }
});
