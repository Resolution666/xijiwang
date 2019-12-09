
require.config({
    baseUrl:"../module2",
    paths:{
        creat:"creatdata"
    }
})
require(["creat"],(c)=>{
console.log("所有模块加载完成");
new c;
});
