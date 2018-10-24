//Euler3
let primeFactors=function(n){
	let r=[]
	let i=2
	while(n>1){	
		while(n%i==0){
			r.push(i)
			n/=i
		}
		i++
	}
	return r
}

console.log(primeFactors(600851475143))

    