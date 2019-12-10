

define(()=>{
    class Creat {
        constructor() {
            this.box = document.querySelector('main');
            this.url = "http://localhost:81/data/data.json"
            this.load();
        }
        load(){
            ajaxGet(this.url,(res)=>{
                this.res = JSON.parse(res);
                this.display();
            })
        }
        display(){
            let u = location.search;
            if(location.search == ""){
                location.href = "../index.html"
            }
            const reg = /id=(\d+)/
            let index = reg.exec(u)[1]
            let str = ``;
            for(let i = 0;i<this.res.length;i++){
                if(this.res[i].goods_id == index){
                    str = `
                    <div class="box-fix" index="${this.res[i].goods_id}">    
                    <div class="box">
                    <div class="imgbox">
                        <img src="${this.res[i].goods_big_logo}" alt="">
                        <span></span>
                    </div>
                    <div class="sbox">
                        <ul>
                            <li class="active"><img src="${this.res[i].goods_big_logo}" alt=""></li>
                        </ul>
                    </div>
                    <div class="bbox">
                        <img src="${this.res[i].goods_big_logo}" alt="">
                    </div>  
                </div>
                <div class="right">
                    <div class="title">
                        <p class="name">
                        ${this.res[i].goods_name}
                        </p>
                    </div>
                    <div class="jiage">
                        <span class="j-l">
                            售价
                        </span>
                        <span class="price">
                            ￥${this.res[i].goods_price}
                        </span>
                        <span class="low">
                            降价通知
                        </span>
                        <p>此海外商品售价会随实时汇率波动产生变化，以您订单生成显示的金额为准。</p>
                    </div>
                    <div class="xinghao">
                        <span class="j-l">型号</span>
                        <div class="d1">1</div>
                        <div class="d1">2</div>
                        <div class="d1">3</div>
                        <div class="d1">4</div>
                    </div>
                    <div class="zhongliang">
                        <span class="j-l">重量</span>
                        <span class="weight">${this.res[i].goods_weight}</span>
                    </div>
                    <div class="num">
                        <span class="j-l">
                            数量
                        </span>
                        <input class="num" type="number" min="1" value="1">
                    </div>
                    <div class="add">
                        加入购物车
                    </div>
                </div>
                </div>
                `
                }
            }
            this.box.innerHTML = str;
        }
    }
    return Creat;
})