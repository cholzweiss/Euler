//euler5
let kgv = function(n){
	for(let i=1;;i++){
		let p=true
		for(let j=0;j<n.length;j++){
			if(i%n[j]!=0){
				p=false
				break
			}
		}
		if(p) return i
	}
	return false
}

console.log(kgv([11,12,13,14,15,16,17,18,19,20]))