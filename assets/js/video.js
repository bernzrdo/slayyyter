$(function(){
    
    $(".video span:nth-child(1)").click(function(){
        $(".video").each(function(i,el){
            $(el).children("video").hide();
            $(el).children("video")[0].pause();
            $(el).children("video")[0].currentTime=0;
            $(el).children("img").show();
            $(el).children("span").show();
        });
        $(this).parent().children("video").show();
        $(this).parent().children("video")[0].play();
        $(this).parent().children("img").hide();
        $(this).hide();
    });
    
    $("video").on("ended",function(){
        $(this).parent().children("video")[0].currentTime=0;
        $(this).parent().children("img").show();
        $(this).parent().children("span").show();
        document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen();
    });
    
});