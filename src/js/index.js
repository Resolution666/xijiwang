require.config({
        baseUrl:"module1",
        paths:{
            banner:"banner",
            creat:"creatdata",
            tab:"tab",
            in:"in",
            time:"time",
            three:"three",
            lazy:"lazyimg"
        }
})
require(["banner","creat","tab","in","time","three","lazy"],(b,c,t,i,e,h,g)=>{ 
    console.log("所有模块加载完成");
    new b;
    new c;
    new t;
    new i;
    new e;      
    new h;
    setTimeout(()=>{
        new g;
    },100)  
});
