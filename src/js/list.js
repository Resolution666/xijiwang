
require.config({
    baseUrl:"../module2",
    paths:{
        creat:"creatdata",
        th:"three",
        jq:"../lib/jquery",
        in:"in",
        sch:"search"
    }
})
require(["creat","th","jq","in","sch"],(c,h,_,n,s)=>{
console.log("所有模块加载完成");
new c;
h();
new n;    
new s;
});
