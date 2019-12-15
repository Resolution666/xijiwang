define(()=>{
    function Three(){
        console.log($(".hb-l p"))
        
        $(".hb-l").hover(()=>{
            console.log(1)
            $(".list-u").stop().animate({
                height:400
            },400)
        },()=>{
            $(".list-u").stop().animate({
                height:0
            },400)
        })
        $(".list-u>li").hover(function(){
            $(this).find(".three").css({
                display:"block"
            })
        },function(){
            $(this).find(".three").css({
                display:"none"
            })
        })
    }

    return Three;
})