$(function(){
    
    $(".video span:nth-child(1)").click(function(){
        $(this).parent().children("iframe").show();
        $(this).parent().children("iframe").height($(this).parent().children("img").height());
        $(this).parent().children("img").remove();
        $(this).remove();
    });
    
});
