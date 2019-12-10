
require.config({
        baseUrl:"module1",
        paths:{
            banner:"banner",
            creat:"creatdata",
            tab:"tab",
            in:"in"

        }
})
require(["banner","creat","tab","in"],(b,c,t,i)=>{ 
    console.log("所有模块加载完成");
    new b;
    new c;
    new t;
    new i;
});
