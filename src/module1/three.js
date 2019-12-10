define(()=>{

    class Three {
        constructor() {
            this.ali = document.querySelectorAll('.hb .li1');
            this.adiv = document.querySelectorAll('.hb .three');
            this.addEvent();
        }
        addEvent(){
            this.ali.forEach((item,index)=>{
                item.onmouseover = ()=>{
                    this.over(index);
                }
                item.onmouseout = ()=>{
                    this.out();
                }
            })
        }
        over(index){
            for(let i = 0;i<this.ali.length;i++){
                this.adiv[i].style.display = "none";
            }
            this.adiv[index].style.display = "flex";
        }
        out(){
            for(let i = 0;i<this.ali.length;i++){
                this.adiv[i].style.display = "none";
            }
        }
    }

    return Three;

})