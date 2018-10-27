//euler7
let primes = function(n){
	let r=[]
	let a=Array.from(new Array(n+1),x=>true)
	a[0]=false
	a[1]=false
	for(let i=2;i<=n;i++){
		if(a[i]){
			r.push(i)
			for(let j=2;j*i<=n;j++){
				a[j*i]=false
			}
		}
	}
	return r
}

console.log(primes(1000000)[10001-1])