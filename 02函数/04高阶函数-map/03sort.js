'use strice';

//顺序排列
var arr = [10,20,1,2];
arr.sort(function(x,y){
	if (x > y){
		return 1;
	}
	if(x < y){
		return -1;
	}
	return 0;
});

//倒序排列
arr.sort(function(x,y){
	if(x < y){
		return 1;
	}
	if(x > y){
		return -1;
	}
	return 0;
});

//忽略大小写排序
var a1 = ['Google','apple','Microsoft'];
a1.sort(function(x,y){
	s1 = x.toUpperCase();
	s2 = y.toUpperCase();
	if(s1 < s2){
		return -1;
	}
	if(s1 > s2){
		return 1;
	}
	return 0;
});// ['apple', 'Google', 'Microsoft']