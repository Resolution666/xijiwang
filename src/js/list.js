
require.config({
    baseUrl:"../module2",
    paths:{
        creat:"creatdata",
        th:"three",
        jq:"../lib/jquery",
        in:"in"
    }
})
require(["creat","th","jq","in"],(c,h,_,n)=>{
console.log("所有模块加载完成");
new c;
h();
new n;    
});
