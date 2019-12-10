require.config({
    baseUrl:"../module6",
    paths:{
        m:"display",
    }
})
require(["m"],(b)=>{    
console.log("所有模块加载完成");
new b;
});