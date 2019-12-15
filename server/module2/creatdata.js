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
            let u = location.search;
            console.log(u)
            if(location.search == "?wd="){
                location.href = "../index.html"
            }
            const reg = /wd=(.+)/
            let index = reg.exec(u)[1]
            
            var a = decodeURI(index)
            let str = "";
            for(let i = 0;i<this.res.length;i++){
                if(this.res[i].goods_name.includes(decodeURI(index))){
                    str += `<div class="box">
                    <a href="detail.html?id=${this.res[i].goods_id}"><img src="${this.res[i].goods_big_logo}" alt=""></a>
                    <a href="detail.html?id=${this.res[i].goods_id}" class="name">${this.res[i].goods_name}</a>
                    <p class="price">￥${this.res[i].goods_price}</p>
                    <div class="s"><span>自营</span><span>海外</span><span>直邮</span></div>
                </div>`
                }
            }
            this.box.innerHTML = str;
        }
    }
    
    return creat;
})