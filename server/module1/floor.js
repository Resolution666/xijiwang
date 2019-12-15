define(()=>{

    class Floor {
        constructor() {
            this.ali = $(".floorl li")
            this.afl = $(".floor")
            this.addEvent();
        }
        addEvent(){
            let that = this;
            this.ali.css({
                opacity:0
            })
            $(document).scroll(()=>{ 
                if($(document).scrollTop() >=200){
                    this.ali.stop().animate({
                        opacity:1
                    })
                }else{
                    this.ali.stop().animate({
                        opacity:0
                    })
                }
            });
            this.ali.click(function(){
                $("html").stop().animate({
                    scrollTop:that.afl.eq($(this).index()).offset().top,
                    
                },200)
            })
        }
    }

    return Floor;
})