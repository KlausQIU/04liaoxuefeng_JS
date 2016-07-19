'use strict';
//函数作为返回值
function lazy_sum(arr){
	var sum = function(){
		return arr.reduce(function(x,y){
			return x + y ;
		});
	}
	return sum;
}

var f= lazy_sum([1,2,3,4,5]);//function sum()
f(); //15

//闭包 
function count(){
	var arr = [];
	for (var i=1;i<=3;i++){
		arr.push((function(){
			return function(n){
				return n*n;
			}
		})(i));  //匿名函数
	}
	return arr;
}

var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];

f1(); //1
f2(); //4
f3(); //9
