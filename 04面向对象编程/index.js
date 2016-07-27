'use strict';
var Student = {
	run:function(){
		console.log(this.name + 'is running');
	}
};

var xiaoming = {
	name:'xiaoming'
};

//把xiaoming的原型指向Student
xiaoming.__proto__ = Student;

//继承属性
xiaoming.name；// 'xiaoming'
xiaoming.run();//xiaoming is running

//创建原型对象
var Student = {
	name:'robot',
}

function createStudent(name){
	var s = Object.create(Student);
	//初始化对象
	s.name = name;
	return s;	
}

//通过函数创建对象  原型继承
var xiaoming2 = createStudent('小明');
