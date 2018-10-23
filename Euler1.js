//Euler 1
let a=Array.from(new Array(1000),(x,i)=>i)
console.log(a.map(x=>x%3==0||x%5==0?x:0).reduce((xs,x)=>xs+x))
