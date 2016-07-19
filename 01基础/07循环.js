'use strict';
var x = 0;
var i;
for (i=1;i<=10000;i++){
	x = x + i;
};

x; //50005000

//homework-1
var x = 1;
var i;
for (i=2;i<=10;i++){
	x = x*i;
};

//通过for遍历数组

var arr=['apple','google','microsoft'];
var i,x;
for (i=0;i<arr.length;i++){
	x = arr[i];
	alert(x);
}

//for...in 列出一个对象的所有属性
var someone= {
	name:'jack',
	age:20,
};
for (var key in someone){
	alert(key); //'name','age'
};

//hasOwnProperty() :过滤对象继承的属性

for (var key in someone){
	if(someone.hasOwnProperty(key)){
		alert(key);//'name','age'
	}
}

//for...in的补充
var a = ['a','b','c'];
for (var i in a){
	alert(i);//'0','1','2'
	alert(a[i]);//'a','b','c'
}

//while

var x = 0;
var n = 99;
while (n > 0){
	x = x + n;
	n = n - 2;
};
x;//2500

//变种  do...while
var n = 0;
do {
	n = n+1;
}while(n<100);
n;//100

//homework-2
var arr=['bart','lisa','adam']
for (var i of arr){
	alert('hello,'+i+'!');
};

//倒序
var i = 0
while (arr.length - i > 0 ){
	i++;
	alert('hello,'+arr[i]+'!');
};

