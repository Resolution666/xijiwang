define(()=>{
    class Index{
        constructor(){
            this.login = document.querySelector(".login");
            this.exit = document.querySelector("header .exit");
            console.log(this.exit)
            console.log(this.login)
            this.getMsg();
            this.addEvent()
        }
        addEvent(){
            var that = this;
            this.exit.onclick = function(){
                that.msg[that.i].onoff = "0";
                setCookie("userMsg",JSON.stringify(that.msg));
                location.reload();
            }
        }
        getMsg(){
            this.msg = getCookie("userMsg") ? JSON.parse(getCookie("userMsg")) : [];
            console.log(this.msg)
            this.i = null; 
            var type = this.msg.some((val,idx)=>{
                this.i = idx;
                return val.onoff === 1;
            })  
            if(type){
                this.login.style.display = "none";
                this.exit.style.display = "block";
            }
        }
    }
    
    return Index;
})