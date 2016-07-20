'use strict';

//homework
//生成一个自动id。通过next调用
function* next_id(){
	var i = 1;
	while(i){
		yield i;
		i++;
	}
	return i;
}