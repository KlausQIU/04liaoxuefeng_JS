'use strice';
//arrow function
x => x * x;

//如果包含多条语句
x => {
	if(x>0){
		return x * x;
	}
	else{
		return -x * x;
	}
} //不能省略{}

//两个参数
(x,y) =>x*x + y*y;

//可变参数
(x,y,...rest)=>{
	var i,sum=x+y;
	for(i=0;i<rest.length;i++){
		sum += rest[i]
	}
	return sum;
}

//返回单表达式
x =>({foo:x}) //不然会与函数体的{}冲突.

// 箭头函数的this => 指向词法作用域
var obj = {
	birth:1990,
	getAge:function(){
		var b = this.birth;
		var fn = () => new Date().getFullYear() - this.birth;
		return fn();
	}
};

obj.getAge();//25

