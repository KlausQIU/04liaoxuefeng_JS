'use strict';

function foo() {
    var x = 1;
    x = x + 1;
}

x = x + 2; // ReferenceError! 无法在函数体外引用变量x

function foo1(){
	var x = 1;
	function bar(){
		var y = x +1;//bar 可以访问foo1的变量x!
	}
	var z = y + 1;//ReferenceError! 无法在函数体外引用变量y!
}

//变量提升
function foo2(){
	var x = 'hello,' + y;
	alert(x);
	var y = 'bob';
}
foo(); //undefined

//全局作用域
var course = 'learn JavaScript';
alert(course);
alert(window.course);

//名字空间
//减少命名冲突，使用唯一全局变量
var myapp = {};

//变量
myapp.name = 'myapp';
myapp.version = 1.0;

//函数
myapp.foo = function(){
	return 'foo';
};

//局部作用域
function foo3(){
	for (var i = 0;i<100;i++){

	}
	i +=100;//仍然可以引用变量i;
}
//let 申明块级作用域的变量
function foo4(){
	var sum = 0;
	for (let i=0;i<100;i++){
		sum +=i;
	}
	i += 1; //syntaxError
}

//常量
//ES6标准 ：const
const PI = 3.14;
PI = 3;//不报错但是无效果；
PI;//3.14


