require.config({
    baseUrl:"../module3",
    paths:{
        creat:"creatdata",
        m:"Magnifier",
        l:"addlist",
        c:"../js/cookie.js",
        in:"in"
    }
})
require(["creat","m","l","in"],(c,l,m,n)=>{    
console.log("所有模块加载完成");
new c;
new n;
setTimeout(()=>{
    new l;
    new m;
},200)

});

