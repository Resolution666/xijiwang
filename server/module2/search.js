define(()=>{
    class Search {
        constructor() {
            this.txt = document.querySelector('header .input');
            this.sub = document.querySelector('header .sub');
            this.addEvent();
        }
        addEvent(){
            this.sub.onclick = ()=>{
                this.val = this.txt.value;
                location.href = "./list.html?wd="+this.val;
            }
        }
    }
    return Search;
})