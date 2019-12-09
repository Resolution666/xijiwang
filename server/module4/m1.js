define(()=>{

    class Login{
        constructor(){
            this.user = document.querySelector(".id")
            this.pass = document.querySelector(".password")
            this.reg = document.querySelector(".reg")
            this.log = document.querySelector(".sub")
            this.span = document.querySelector("span")
            this.addEvent();
            console.log(this.user)
            console.log(this.pass)
            console.log(this.reg)
            console.log(this.log)
        }
        addEvent(){
            var that = this;
            this.log.onclick = function(){
                that.u = that.user.value;
                that.p = that.pass.value;
                that.getMsg();
            }
            this.reg.onclick = function(){
                location.href = "register.html";
            }
        }
        getMsg(){
            this.msg = getCookie("userMsg") ? JSON.parse(getCookie("userMsg")) : [];
            
            var type = 0;
            for(var i=0;i<this.msg.length;i++){
                if(this.msg[i].user == this.u && this.msg[i].pass == this.p){
                    
                    this.msg[i].onoff = 1;
                    alert("登录成功")
                    setCookie("userMsg",JSON.stringify(this.msg),{
                        path:"/"
                    })
                    type = 1;
                }else if(this.msg[i].user == this.u && this.msg[i].pass != this.p){
                    alert("密码错误")
                    type = 2;
                }
            }
            if(type == 0){
                this.span.innerHTML = "用户名不存在,请<a href='register.html'>注册</a>";
            }
        }
    }
    
    return Login;
})