require.config({
        baseUrl:"module1",
        paths:{
            banner:"banner",
            creat:"creatdata",
            tab:"tab",
            in:"in",
            time:"time",
            three:"three",
            lazy:"lazyimg",         
            jq:"../lib/jquery",
            fl:"floor",
            sch:"search"
        }
})
require(["banner","creat","tab","in","time","three","lazy","jq","fl","sch"],(b,c,t,i,e,h,g,_,f,s)=>{ 
    console.log("所有模块加载完成");
    new b;
    new c;
    new t;
    new i;
    new e;      
    new h;
    new f;
    new s;
    setTimeout(()=>{
        new g;
    },100)  
});
