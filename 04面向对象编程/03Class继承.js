'use strict'；
//es6之后支持class了
class Student{
	constructor(name){
		this.name = name;
	}
	hello(){
		alert('Hello, '+this.name + '!');
	}
}

//class 继承
//extends 实现继承

class PrimaryStudent extends Student {
	constructor(name,grade){
		super(name);//super调用父类的构造方法
		this.grade = grade;
	}
	myGrade(){
		alert('i am at grade '+this.grade);
	}
}

//homework
class Cat extends Animal{
constructor(name){
super(name);
}
say(){
return 'Hello, '+this.name+'!';
}}


