require.config({
    baseUrl:"../module4",
    paths:{
        m:"m1-l",
    }
})
require(["m"],(b)=>{    
console.log("所有模块加载完成");
new b;
});