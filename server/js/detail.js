require.config({
    baseUrl:"../module3",
    paths:{
        m:"Magnifier",
    }
})
require(["m"],(b)=>{    
console.log("所有模块加载完成");
new b;

});

