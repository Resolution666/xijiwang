require.config({
    baseUrl:"../module3",
    paths:{
        creat:"creatdata",
        m:"Magnifier",
        l:"addlist",
        c:"../js/cookie.js"
    }
})
require(["creat","m","l"],(c,l,m)=>{    
console.log("所有模块加载完成");
new c;
setTimeout(()=>{
    new l;
    new m;
},200)

});

