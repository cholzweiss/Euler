//Euler4
let isPalindrome=function(n){
	let na=n.toString()
	for(let i=0;i<=na.length/2;i++){
		if(na.charAt(i)!=na.charAt(na.length-1-i)){
			return false
		}
	}
	return true
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

    