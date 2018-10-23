//Euler2
let a=[1]
let n=2
while(n<4000000){
	a.push(n)
	n=a[a.length-2]+a[a.length-1]
}
let r=a.map(x=>x%2==0?x:0).reduce((xs,x)=>xs+x)
Console.log(r)