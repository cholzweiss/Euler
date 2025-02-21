function distance(n){
	a0 = Array(n).fill().map((_, index) => index + 1)
	a1 = Array(n).fill().map((_, index) => index + 1).map(x=>2*x-1)
	all = a0.flatMap(x=>[a1[x-1], x])
	return all
}

function index(distance, amount){
	let dist = distance.slice()
	for(let i=0; i< dist.length; i++){
		dist[i] = i==0 ? amount - i -1 : dist[i-1]-dist[i]
	}
	return dist.filter(x => x>=0)
}

function ps(max){
	let distances = distance(max)
	let p = [
		[0, BigInt(1)],
		[1, BigInt(1)]
	]

	for(let i=2; i<max; i++){
		let values = index(distances, i).map(x=>BigInt(p[x][1]))
		for(let j=2; j<values.length; j+=4)
			values[j] = BigInt(-1)*values[j]	
		for(let j=3; j<values.length; j+=4)
			values[j] = BigInt(-1)*values[j]
		p[i] = [i, values.reduce((x, y) => BigInt(x)+BigInt(y))]
	}
	return p
}

function euler78(){
	return ps(100000).filter(x => x[1]%BigInt(1000000)==BigInt(0))
}

let start = new Date()
let res = euler78()
let end = new Date() - start
console.log(end)
console.log(res)

// 193680 Milliseconds in a Chrome console
