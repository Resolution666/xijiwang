define(()=>{
    class LazyImg {
        constructor() {
            this.aimg = document.querySelectorAll('img[lazy]');
            this.arr = Array.from(this.aimg)
            this.clientH = document.documentElement.clientHeight;
            this.laz()
        }
        laz(){
            this.lazyLoad = ()=>{
                var scrollT = document.documentElement.scrollTop;
                for(var i=0;i<this.arr.length;i++){
        //			当前图片距离顶部的位置
                    if(this.arr[i].offsetTop - this.clientH < scrollT){
                        this.arr[i].src = this.arr[i].getAttribute("lazy");
                        
        //				1.注意伪数组是否被转成真数组
                        this.arr.splice(i,1);
        //				2.注意在数组的遍历中修改数组的长度而导致的后果
                        i--;
                    }
                }
            }
            this.lazyLoad();
            onscroll = ()=>{
                this.lazyLoad();
            }
        }
    }

    return LazyImg;
})