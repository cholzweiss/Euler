let start = Date.now()
let a = Array.from(Array(2000000), (_, n)=>n).slice(2)
	.map((n)=>[n, Array.from(Array(Math.floor(Math.sqrt(n))+1), (_, n)=>n).slice(2).some(x=>n%x==0)])
	.filter(x=>!x[1]).map(x=>x[0])
	.reduce((acc, curr)=>acc+curr)
console.log(a, Date.now()-start)

/* ------------ Much faster: ------------------- */

let start = Date.now()
let a=Array(2000000).fill(0).map((_,i)=>{
	if(i<2) return false;
	let x = 2;
	while(x<=Math.sqrt(i)){
		if(i % x == 0) return [i, false]
		x++
	}
	return [i,true]
})
.filter(x=>x[1]).map(x=>x[0])
.reduce((acc, curr)=>acc+curr)
console.log(a, Date.now()-start)
