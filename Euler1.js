//Euler 1
let a=Array
	.from(new Array(1000),(x,i)=>i)
	.map(x=>x%3==0||x%5==0?x:0)
	.reduce((xs,x)=>xs+x)
console.log(a)