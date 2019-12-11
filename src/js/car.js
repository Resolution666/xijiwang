require.config({
    baseUrl:"../module6",
    paths:{
        m:"display",
        in:"in"
    }
})
require(["m","in"],(b,n)=>{    
console.log("所有模块加载完成");
new b;
new n;
});