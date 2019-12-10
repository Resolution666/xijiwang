define( ()=> {
    'use strict';
    class Register{
        constructor(){
            this.user = document.querySelector(".id")
            this.pass = document.querySelector(".password")
            this.reg = document.querySelector(".sub")
            this.log = document.querySelector(".reg")
            this.span = document.querySelector("span")
            this.addEvent();
            console.log(this.user)
            console.log(this.pass)
            console.log(this.reg)
            console.log(this.log)
            console.log(document.cookie)
        }
        addEvent(){
            var that = this;
            this.reg.onclick = function(){
                that.u = that.user.value;
                that.p = that.pass.value;
                console.log(that.u)
                console.log(that.p)
                that.setMsg();
            }
            this.log.onclick = function(){
                // location.href = "login.html";    
                // alert("注册成功")
            }
        }
        setMsg(){
//				数据格式:[{user:"admin",pass:"123",onoff:0},{...},{...},...]
            this.msg = getCookie("userMsg") ? JSON.parse(getCookie("userMsg")) : [];
//				第一个用户
            if(this.msg.length<1){
                this.msg.push({
                    user:this.u,
                    pass:this.p,
                    onoff:0
                })
                this.success();
            }else{
//				非第一个用户
//					重名了
                var type = this.msg.some((val,idx)=>{
                    return val.user === this.u;
                });
                if(type){
                    location.href = "login.html"
                }else{
//					没重名,直接注册
                    this.msg.push({
                        user:this.u,
                        pass:this.p,
                        onoff:0
                    })
                    this.success();
                }
            }
            setCookie("userMsg",JSON.stringify(this.msg),{
                path:"/"
            });
        }
        success(){
            // this.span.innerHTML = "注册成功，5秒后<a href='login.html'>跳转到登录</a>";
            setTimeout(()=>{
                location.href = "login.html";
            },5000)
        }
    }
    
    return Register;
});