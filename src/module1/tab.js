define(()=>{
    class Tab{
        constructor(){
            this.ali = document.querySelectorAll('.m-l-t-c li');
            this.abox = document.querySelectorAll('.m-l-t-b .box');
            this.addEvent();
        }
        addEvent(){
            this.ali.forEach((item,index)=>{
                item.onmouseover = ()=>{
                    this.over(item,index)
                }
            })
        }
        over(item,index){
            for(let i = 0;i<this.ali.length;i++){
                this.ali[i].className = "";
                this.abox[i].style.display = "none";
            }
            item.className = "active";
            this.abox[index].style.display = "block";
        }
    }

    return Tab;
})





