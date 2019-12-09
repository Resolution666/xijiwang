define(()=>{

    class creat{
        constructor(){
            this.box= document.querySelector('#main');
            this.url = "http://localhost:81/data/data.json"
            this.load();
        }
        load(){
            ajaxGet(this.url,(res)=>{
                this.res = JSON.parse(res);
                this.display1();
            })
            
        }
        display1(){
            let str = "";
            for(let i = 0;i<this.res.length;i++){
                str += `<div class="box">
                <a href=""><img src="${this.res[i].goods_big_logo}" alt=""></a>
                <p class="price">￥${this.res[i].goods_price}</p>
                <a href="#" class="name">${this.res[i].goods_name}</a>
                <div class="s"><span>自营</span><span>海外</span><span>直邮</span></div>
            </div>`
            }
            this.box.innerHTML = str;
        }
    }
    
    return creat;
})