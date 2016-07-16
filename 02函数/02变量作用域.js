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