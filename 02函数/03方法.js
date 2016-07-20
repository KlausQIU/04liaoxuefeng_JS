'use strict';

//注意this永远指向当前对象
var xiaoming = {
	name:'xiaoming',
	birth:1990,
	age:function(){
		var y =  new Date().getFullYear();
		return y - this.birth;
	}
};

xiaoming.age;//function xiaoming.age()
xiaoming.age(); //26

//apply 第一个参数为this的对象，第二个参数是array，表示函数本身的参数

 function getAge(){
 	var y = new Date().getFullYear();
 	return y - this.birth;
 }

 var xiaoming2 = {
 	name :'xiaoming',
 	birth:1990,
 	age:getAge
 };

 xiaoming.age();//26
 getAge.apply(xiaoming2,[]);

 //call 与apply类似，apply打包成array传入，call把参数按顺序传入

Math.max.apply(null,[3,5,6]); //6
Math.max.call(null,3,5,6);  //6

//装饰器 计算ParseInt使用的次数
var count = 0;
var oldParseInt = parseInt;

window.parseInt = function(){
	conut += 1;
	return oldParseInt.apply(null,arguments);
};

parseInt('10');
parseInt('20');
parseInt('30');
count; // 3

