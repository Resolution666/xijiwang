define(()=>{
    'use strict';
    class List {
        constructor() {
            this.box = document.querySelector('main .box-fix');
            this.add = document.querySelector('main .add');
            this.num = document.querySelector('.num .num');
            this.addEvent();
        }
        addEvent(){
            this.add.onclick = ()=>{
                console.log(this.num.value)
                this.id = this.box.getAttribute("index");
                this.setCookie();
            }
        }
        setCookie(){
            this.goods = getCookie("goodsCookie") ? JSON.parse(getCookie("goodsCookie")) : [];
				if(this.goods.length < 1 ){
					this.goods.push({
						id:this.id,
						num:this.num.value/1
                    })
                    alert("加入成功，快去结算吧")
				}else{
					var onoff = true;
					for(var i = 0;i<this.goods.length;i++){
						if(this.goods[i].id == this.id){
							this.goods[i].num+=this.num.value/1;
							onoff = false;
						}
					}
					if(onoff){
						this.goods.push({
							id:this.id,
							num:this.num.value/1
						})
                    }
                    alert("加入成功，快去结算吧")
				}
				setCookie("goodsCookie",JSON.stringify(this.goods),{
                    path:"/"
                });
        }
    }
    return List;
});