require.config({
    baseUrl:"../module6",
    paths:{
        m:"display",
        in:"in",
        sch:"search"
    }
})
require(["m","in","sch"],(b,n,s)=>{    
console.log("所有模块加载完成");
new b;
new n;
new s;
});