//euler6
let diff = function(n){
	s1=0
	s2=0
	for(let i=1;i<=n;i++){
		s1+=i*i
		s2+=i
	}
	return s2*s2-s1
}

console.log(diff(100))