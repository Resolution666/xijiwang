define(()=>{

    class creat{
        constructor(){
            this.boxd1= document.querySelector('.m-l-t-b .d1 ul');
            this.boxd2= document.querySelector('.m-l-t-b .d2 ul');
            this.boxd3= document.querySelector('.m-l-t-b .d3 ul');
            this.box2= document.querySelector('.m-l-b-b ul');
            this.box3= document.querySelector('.m2-t-l .box1 ul');
            this.box4= document.querySelector('.m2-t-r .box1 ul');
            this.box5= document.querySelector('.m2-b-l .box1 ul');
            this.box6= document.querySelector('.m2-b-r .box1 ul');
            this.url = "http://localhost:81/data/data.json"
            this.load();
        }
        load(){
            ajaxGet(this.url,(res)=>{
                this.res = JSON.parse(res);
                this.displayd1();
                this.displayd2();
                this.displayd3();
                this.display2();
                this.display3();
                this.display4();
                this.display5();
                this.display6();
            })
            
        }
        displayd1(){
            let str = "";
            for(let i = 0;i<5;i++){
                str += `<li>
                <div class="data">
                    <div class="d-img">
                    <a href="#"><img src="${this.res[i].goods_big_logo}" alt=""></a>
                    </div>
                    <div class="d-name">
                        <a href="#">
                            ${this.res[i].goods_name} 
                        </a>
                    </div>
                    <div class="d-price">
                        <h4>￥：${this.res[i].goods_price}</h4>
                    </div>
                </div>
            </li>`
            }
            this.boxd1.innerHTML = str;
        }
        displayd2(){
            let str = "";
            for(let i = 25;i<30;i++){
                str += `<li>
                <div class="data">
                    <div class="d-img">
                    <a href="#"><img src="${this.res[i].goods_big_logo}" alt=""></a>
                    </div>
                    <div class="d-name">
                        <a href="#">
                            ${this.res[i].goods_name} 
                        </a>
                    </div>
                    <div class="d-price">
                        <h4>￥：${this.res[i].goods_price}</h4>
                    </div>
                </div>
            </li>`
            }
            this.boxd2.innerHTML = str;
        }
        displayd3(){
            let str = "";
            for(let i = 30;i<35;i++){
                str += `<li>
                <div class="data">
                    <div class="d-img">
                    <a href="#"><img src="${this.res[i].goods_big_logo}" alt=""></a>
                    </div>
                    <div class="d-name">
                        <a href="#">
                            ${this.res[i].goods_name} 
                        </a>
                    </div>
                    <div class="d-price">
                        <h4>￥：${this.res[i].goods_price}</h4>
                    </div>
                </div>
            </li>`
            }
            this.boxd3.innerHTML = str;
        }
        display2(){
            let str = "";
            for(let i = 5;i<10;i++){
                str += `<li>
                <div class="data">
                    <div class="d-img">
                    <a href="#"><img src="${this.res[i].goods_big_logo}" alt=""></a>
                    </div>
                    <div class="d-name">
                        <a href="#">
                            ${this.res[i].goods_name} 
                        </a>
                    </div>
                    <div class="d-price">
                        <h4>￥：${this.res[i].goods_price}</h4>
                    </div>
                </div>
            </li>`
            }
            this.box2.innerHTML = str;
        }
        display3(){
            let str = "";
            for(let i = 10;i<15;i++){
                str += ` <li>
                <div class="m-box">
                    <a href="#" class="img">
                        <img src="${this.res[i].goods_big_logo}" alt="">
                    </a>
                    <a href="#" class="title">
                        ${this.res[i].goods_name}
                    </a>
                    <span class="price">￥${this.res[i].goods_price}</span>
                </div>
            </li>`
            }
            this.box3.innerHTML = str;
        }
        display4(){
            let str = "";
            for(let i = 15;i<20;i++){
                str += ` <li>
                <div class="m-box">
                    <a href="#" class="img">
                        <img src="${this.res[i].goods_big_logo}" alt="">
                    </a>
                    <a href="#" class="title">
                        ${this.res[i].goods_name}
                    </a>
                    <span class="price">￥${this.res[i].goods_price}</span>
                </div>
            </li>`
            }
            this.box4.innerHTML = str;
        }
        display5(){
            let str = "";
            for(let i = 20;i<25;i++){
                str += ` <li>
                <div class="m-box">
                    <a href="#" class="img">
                        <img src="${this.res[i].goods_big_logo}" alt="">
                    </a>
                    <a href="#" class="title">
                        ${this.res[i].goods_name}
                    </a>
                    <span class="price">￥${this.res[i].goods_price}</span>
                </div>
            </li>`
            }
            this.box5.innerHTML = str;
        }
        display6(){
            let str = "";
            for(let i = 25;i<30;i++){
                str += ` <li>
                <div class="m-box">
                    <a href="#" class="img">
                        <img src="${this.res[i].goods_big_logo}" alt="">
                    </a>
                    <a href="#" class="title">
                        ${this.res[i].goods_name}
                    </a>
                    <span class="price">￥${this.res[i].goods_price}</span>
                </div>
            </li>`
            }
            this.box6.innerHTML = str;
        }
    }
    
    return creat;
})