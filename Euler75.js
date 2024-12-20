let k = 1
let m = 2
let n = 1

max=1500001

let arr = []

function ggt(a, b){
	while(b != 0){
		let h = a%b
		a = b
		b = h
	}
	return Math.abs(a) == 1
}

while(k < max/2){
	while(k*(m*m-n*n) + k*2*m*n + k*(m*m+n*n) < max){
		while( k*(m*m-n*n) + k*2*m*n + k*(m*m+n*n) < max){
			if(ggt(m, n)){
				//console.log(k*(m*m-n*n) + k*2*m*n + k*(m*m+n*n), k*(m*m-n*n), k*2*m*n, k*(m*m+n*n) )
				//arr[k*(m*m-n*n) + k*2*m*n + k*(m*m+n*n)].push(k*(m*m-n*n))
				
				if(arr[k*(m*m-n*n) + k*2*m*n + k*(m*m+n*n)]){
					if(!arr[k*(m*m-n*n) + k*2*m*n + k*(m*m+n*n)].includes(Math.min(...[k*(m*m-n*n) + k*2*m*n + k*(m*m+n*n), k*(m*m-n*n), k*2*m*n, k*(m*m+n*n)])))
					arr[k*(m*m-n*n) + k*2*m*n + k*(m*m+n*n)].push(Math.min(...[k*(m*m-n*n) + k*2*m*n + k*(m*m+n*n), k*(m*m-n*n), k*2*m*n, k*(m*m+n*n)]))
				}
				else{
					arr[k*(m*m-n*n) + k*2*m*n + k*(m*m+n*n)] = [Math.min(...[k*(m*m-n*n) + k*2*m*n + k*(m*m+n*n), k*(m*m-n*n), k*2*m*n, k*(m*m+n*n)])]
				}
			}
			m++
		}
		n++
		m = n+1
	}
	k++
	m = 2
	n = 1
}

const res = arr.filter((x) => x.length==1)

console.log(res.length)
