require.config({
    baseUrl:"../module5",
    paths:{
        m:"m1",
    }
})
require(["m"],(b)=>{    
console.log("所有模块加载完成");
new b;

});