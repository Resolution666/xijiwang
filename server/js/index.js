
require.config({
        baseUrl:"module1",
        paths:{
            banner:"banner",
            creat:"creatdata",
            tab:"tab"
        }
})
require(["banner","creat","tab"],(b,c,t)=>{ 
    console.log("所有模块加载完成");
    new b;
    new c;
    new t;
});
