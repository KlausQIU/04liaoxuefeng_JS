'use strict';
//homework
function get_primes(arr){
	function g(val){
		for(var i=2;i<=(val/2);i++){
			if (val%i === 0){
				return 0;
			}
		}return val === 1?0:1;
	}
	return arr.filter(g)
}

//输出素数
