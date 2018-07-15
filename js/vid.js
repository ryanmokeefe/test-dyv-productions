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
    $(popoutVid).append(sources);
    var video = $(popoutVid).get(0);
    video.load();
    popout.style.display = "flex";
    video.play();
});


// Exit when clicked or esc is pressed

var exit = $(".exit-popout");

$(document).keydown(function(e) {
    // DRY up
    if (e.keyCode == 27) {
        var video = $(popoutVid).get(0);
        video.pause();
        oldSource = $(popoutVid).find("source");
        $(oldSource).remove();

        popout.style.display = "none";
    }
});

exit.click(function() {
// DRY up
    var video = $(popoutVid).get(0);
    video.pause();
    oldSource = $(popoutVid).find("source");
    $(oldSource).remove();

    popout.style.display = "none";
});

// var clearPopout = () => {
//     var video = $(popoutVid).get(0);
//     video.pause();
//     oldSource = $(popoutVid).find("source");
//     $(oldSource).remove();

//     popout.style.display = "none";
// }

