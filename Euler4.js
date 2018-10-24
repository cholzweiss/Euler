//Euler4
let isPalindrome=function(n){
	let na=n.toString()
	let nar=na.split('').reverse().join('')
	if(na==nar) return true
	return false
}

let e4=function(n){
	let res=1
	for(let i=1;i<=n;i++){
		for(let j=1;j<=n;j++){
			let r=i*j
			if(r>res&&isPalindrome(r)){
				res=r
			}
		}
	}
	return res
}


console.log(e4(999))

    