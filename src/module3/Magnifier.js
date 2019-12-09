define(()=>{
    'use strict';
    class Magnifier {
        constructor() {
            this.imgbox = document.querySelector('main .imgbox');
            this.img = document.querySelector('main .imgbox img');
            this.span = document.querySelector('main .imgbox span');
            this.sbox = document.querySelector('main .sbox');
            this.simg = document.querySelectorAll('main .sbox li');
            this.bbox = document.querySelector('main .bbox');
            this.bimg = document.querySelector('main .bbox img');
            this.addEvent()
        }
        addEvent(){
            this.imgbox.onmouseover = (eve)=>{
                let e  = eve || window.event;
                this.over();
            }
            this.imgbox.onmouseout = (eve)=>{
                let e = eve || window.event;
                this.out(e);
            }
            this.imgbox.onmousemove = (eve)=>{
                let e = eve || window.event;
                this.move(e);
            }
        }
        over(){
            this.span.style.display = "block";
            this.bbox.style.display = "block";
            this.sW = this.imgbox.offsetWidth*(this.bbox.offsetWidth/this.bimg.offsetWidth);
            this.sH = this.imgbox.offsetHeight*(this.bbox.offsetHeight/this.bimg.offsetHeight);
            this.span.style.width = this.sW+"px";
            this.span.style.height = this.sH+"px";
        }
        move(e){
            let l = e.pageX-this.imgbox.parentElement.offsetLeft-this.span.offsetWidth/2
            let t = e.pageY-this.imgbox.parentElement.offsetTop-this.span.offsetHeight/2
            if( l < 0 ) l = 0;
            if( t < 0 ) t = 0;
            if(l > this.imgbox.offsetWidth-this.span.offsetWidth){
                l = this.imgbox.offsetWidth-this.span.offsetWidth
            }
            if(t > this.imgbox.offsetHeight-this.span.offsetHeight){
                t = this.imgbox.offsetHeight-this.span.offsetHeight
            }
            this.span.style.left = l + "px";
            this.span.style.top = t + "px";
            this.bimg.style.left = -l/((this.imgbox.offsetWidth-this.span.offsetWidth)/(this.bimg.offsetWidth-this.bbox.offsetWidth)) + "px";
            this.bimg.style.top = -t/((this.imgbox.offsetHeight-this.span.offsetHeight)/(this.bimg.offsetHeight-this.bbox.offsetHeight)) + "px";
        }
        out(){
            this.span.style.display = "none";
            this.bbox.style.display = "none";
        }

    }
    return Magnifier;
});